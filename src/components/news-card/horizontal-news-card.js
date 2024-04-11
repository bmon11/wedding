import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function HorizontalNewsCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 250 }}
        image="/assets/images/home/services/bg_1.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            2024.01.01
          </Typography>
          {/* <Typography fontWeight={"bold"}>2024.01.01</Typography> */}
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>

          <Typography
            variant="p"
            // color="text.secondary"
            component="div"
          >
            The starting point for your next project with Minimal UI Kit, built
            on the newest version of Material-UI ©, ready to be customized to
            your style.
          </Typography>

          <Button variant="outlined">↪</Button>
        </CardContent>
      </Box>
    </Card>
  );
}
