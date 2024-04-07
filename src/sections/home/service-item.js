import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Image from "src/components/image/image";
import { serviceData } from "./data-placeholder";
import { Butcherman } from "next/font/google";
import { column } from "stylis";

export default function ServiceItem(params) {
  return (
    <Container sx={{ mb: 10 }}>
      <Typography variant="h3" align="center" sx={{ mb: 10, mt: 15 }}>
        Бидний үйлчилгээ
      </Typography>
      <Grid container spacing={3}>
        {[0, 1, 2, 3].map((value) => (
          <Grid item key={value} xs={6} md={3}>
            <Paper
              sx={{
                textAlign: "center",
                // border: 1,
                // borderRadius: 0,
              }}
            >
              <Image
                dir="ltr"
                alt={serviceData[value].description}
                src={serviceData[value].imgURL}
                ratio="3/4"
                sx={{
                  border: 0,
                  borderRadius: 1,
                  px: 3,
                }}
              />
              <Box align="left">
                <Typography variant="h6" align="left" py={1}>
                  {serviceData[value].description}
                </Typography>
                <Button variant="outlined">↪</Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
