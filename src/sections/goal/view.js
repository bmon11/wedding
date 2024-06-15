"use client";

import MainLayout from "src/layouts/main";
import HeroImage from "src/components/image/hero-image";
import { Container, Typography, Stack } from "@mui/material";
import ServiceItem from "../home/service-item";
import { caligraphicFont } from "src/theme/typography";
import Image from "src/components/image/image";
import Box from "@mui/material/Box";
 
export default function GoalView(params) {
  return (
    <MainLayout>
      <HeroImage
        imgURL={
          "https://images.adsttc.com/media/images/5f17/35c7/b357/65da/b000/0006/large_jpg/TGWM_065_DC76368_L.jpg?1595356596"
        }
        description={""}
        title={""}
      />

      <Container sx={{ marginTop: "5px" }}>
        <Stack spacing={3}>
          <Typography
            variant="h2"
            textAlign={"center"}
            fontFamily={caligraphicFont.style.fontFamily}
          >
            Зорилго Зорилт
          </Typography>
          <Typography textAlign={"center"}>
          Бид таны сэтгэлд хүрсэн гэрлэх ёслолын үйлчилгээг үзүүлж, залуу хосын цаашдын амьдралыг мөнхлөн бадраана.
          </Typography>
          
          <Box>
            <Image 
              dir="ltr"
              alt={"Greetings"}
              src={"/assets/images/about/outside.jpg"}
              ratio="21/9"
              maxWidth={"70%"}
              sx={{
                border: 0,
                borderRadius: 1,
                marginLeft: '15%'
              }}/>
          </Box>
          <Typography
            variant="h2"
            textAlign={"center"}
            fontFamily={caligraphicFont.style.fontFamily}
          >
            Алсын Хараа
          </Typography>
          <Typography textAlign={"justify"}>
          Монгол улсын ард иргэдийн гэрэлт ирээдүйн төлөө бид, залуу хосын хамгийн аз жаргалтай мөчийг мартагдашгүйгээр мөнхлөх мөн дэлхийн түвшинд   үндэсний гэрлэх ёслолын уламжлалт ёс заншил, өв соёлыг таниулах нь бидний туйлын хүсэл эрмэлзлэл билээ.
          </Typography>
        </Stack>
      </Container>
      s
    </MainLayout>
  );
}
