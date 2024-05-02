import { m } from "framer-motion";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { alpha, useTheme } from "@mui/material/styles";

import { grey } from "src/theme/palette";

import Image from "src/components/image";
import { varFade, MotionContainer } from "src/components/animate";
import Carousel, {
  useCarousel,
  CarouselArrowIndex,
} from "src/components/carousel";
import { caligraphicFont } from "src/theme/typography";
import { delay } from "lodash";

// import { bgGradient } from "src/theme/css";
// import { Great_Vibes } from "next/font/google";

// ----------------------------------------------------------------------

export default function CarouselAnimation({ data }) {
  const carousel = useCarousel({
    speed: 800,
    autoplay: true,
  });

  return (
    <Card sx={{ border: 0, borderRadius: 0 }}>
      <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
        {data.map((item, index) => (
          <CarouselItem
            key={item.id}
            item={item}
            active={index === carousel.currentIndex}
          />
        ))}
      </Carousel>

      <CarouselArrowIndex
        index={carousel.currentIndex}
        total={data.length}
        onNext={carousel.onNext}
        onPrev={carousel.onPrev}
      />
    </Card>
  );
}

CarouselAnimation.propTypes = {
  data: PropTypes.array,
};

// ----------------------------------------------------------------------

function CarouselItem({ item, active }) {
  const theme = useTheme();

  const { coverUrl, title } = item;

  const variants =
    theme.direction === "rtl" ? varFade().inLeft : varFade().inRight;

  return (
    <Paper sx={{ position: "relative" }}>
      <Image dir="ltr" alt={title} src={coverUrl} ratio="24/9" />

      <Box
        sx={{
          top: 0,
          width: 1,
          height: 1,
          position: "absolute",
          // ...bgGradient({
          //   direction: "to top",
          //   startColor: `${theme.palette.grey[800]} 0%`,
          //   endColor: `${alpha(theme.palette.grey[800], 0)} 20%`,
          // }),
        }}
      />

      <CardContent
        component={MotionContainer}
        animate={active}
        action
        sx={{
          left: "18%",
          top: "25%",
          textAlign: "left",
          position: "absolute",
          color: "common.black",
        }}
      >
        <m.div variants={variants}>
          <Typography
            fontWeight={"bold"}
            color={"common.white"}
            fontSize={"7em"}
            gutterBottom
            fontFamily={caligraphicFont.style.fontFamily}
          >
            {title}
          </Typography>
        </m.div>

        <m.div variants={variants}>
          <Typography
            variant="body2"
            gutterBottom
            color={grey[800]}
            maxWidth={400}
            textAlign={"justify"}
          >
            {`${item.description}`}
          </Typography>
        </m.div>

        <m.div variants={variants}>
          <Button variant="contained" sx={{ mt: 3, px: 8, py: 1 }}>
            Дэлгэрэнгүй
          </Button>
        </m.div>
      </CardContent>
    </Paper>
  );
}

CarouselItem.propTypes = {
  active: PropTypes.bool,
  item: PropTypes.object,
};
