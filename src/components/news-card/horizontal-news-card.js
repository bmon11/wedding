import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useResponsive } from "src/hooks/use-responsive";
import { RouterLink } from "src/routes/components";
// import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function HorizontalNewsCard({
  id,
  imgURL,
  title,
  content,
  timestamp,
}) {
  // const theme = useTheme();
  const mdUp = useResponsive("up", "md");

  return (
    <Card sx={{ display: "flex" }}>
      {mdUp && (
        <CardMedia
          component="img"
          sx={{ width: 250 }}
          image={imgURL}
          alt="Live from space album cover"
        />
      )}
      {!mdUp && (
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image={imgURL}
          alt="Live from space album cover"
        />
      )}

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {timestamp}
          </Typography>
          {/* <Typography fontWeight={"bold"}>2024.01.01</Typography> */}
          <Typography component="div" variant="h5">
            {title}
          </Typography>

          {mdUp && (
            <Typography variant="p" component="div">
              {content}
            </Typography>
          )}

          {!mdUp && (
            <Typography variant="p" component="div">
              {content.slice(0, 20) + "..."}
            </Typography>
          )}

          <Button
            component={RouterLink}
            variant="outlined"
            href={`/news/${id}`}
          >
            ↪
          </Button>
          {/* <Link href={`/news/${id}`}>↪</Link> */}
        </CardContent>
      </Box>
    </Card>
  );
}
