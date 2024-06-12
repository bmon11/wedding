import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import MediaCard from "src/components/card/media-card";
import { newsData } from "./data-placeholder";
import { caligraphicFont } from "src/theme/typography";

export default function NewsItem() {
  return (
    <Container sx={{ mb: 10 }}>
      <Typography
        variant="h1"
        align="center"
        mb={10}
        fontFamily={caligraphicFont.style.fontFamily}
      >
        Тэдээ Тэдээлэл
      </Typography>

      <Grid container spacing={3}>
        {[0, 1, 2].map((value) => (
          <Grid item key={value} xs={4}>
            <MediaCard
              title={newsData[value].title}
              timestamp={newsData[value].timestamp}
              imgURL={newsData[value].imgURL}
              body={newsData[value].description}
            />
          </Grid>
        ))}
      </Grid>
      <Box mt={3} align="center">
        <Button variant="outlined">Бусад мэдээлэл</Button>
      </Box>
    </Container>
  );
}
