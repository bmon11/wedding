"use client";
import MainLayout from "src/layouts/main";
import HeroImageService from "src/components/image/hero-image-service";
import { Container, Typography, Stack, Box, Grid } from "@mui/material";
import ControlledForm from "src/components/form";
import { dataPlaceholder } from "../carousel-view/data-placeholder";
import CarouselCenterMode from "../carousel-view/carousel-center-mode";

export default function RentView(params) {
  return (
    <MainLayout>
      <HeroImageService
        imgURL={
          "https://images.adsttc.com/media/images/5f17/35c7/b357/65da/b000/0006/large_jpg/TGWM_065_DC76368_L.jpg?1595356596"
        }
        description={"Гэрлэх ёслолын ордны зааланд фото, дүрс бичлэг авахуулах"}
        title={"ТҮРЭЭСИЙН ҮЙЛЧИЛГЭЭ"}
      />
      <Container>
        <Stack spacing={2} my={2}>
          <Typography variant="h2" fontWeight={"bold"} textAlign={"center"}>
            Заалны түрээс
          </Typography>
          <Typography textAlign={"justify"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </Typography>
          <CarouselCenterMode data={dataPlaceholder.slice(0, 4)} />
          <ControlledForm />
        </Stack>
      </Container>
    </MainLayout>
  );
}
