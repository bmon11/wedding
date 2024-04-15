import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Image from "src/components/image/image";

export default function GreetingItem(params) {
  return (
    <Container sx={{ mb: 10 }}>
      <Typography variant="h3" align="center" mb={10}>
        Мэндчилгээ
      </Typography>

      <Grid container spacing={3}>
        <Grid item key={"picture"} xs={12} md={6}>
          <Image
            dir="ltr"
            alt={"Greetings"}
            src={"/assets/images/home/services/greetings_f.jpg"}
            ratio="1/1"
            sx={{
              border: 0,
              borderRadius: 1,
            }}
          />
        </Grid>

        <Grid item key={"paragraph"} xs={12} md={6}>
          <Typography textAlign={"justify"} fontSize={21}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
