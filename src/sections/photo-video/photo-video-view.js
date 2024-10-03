"use client";
import MainLayout from "src/layouts/main";
import HeroImageService from "src/components/image/hero-image-service";
import { Container, Typography, Stack, Box, Grid } from "@mui/material";
import ControlledForm from "src/components/form";
import { dataPlaceholder } from "../carousel-view/data-placeholder";
import CarouselCenterMode from "../carousel-view/carousel-center-mode";
import { caligraphicFont } from "src/theme/typography";

export default function PhotoVideoView(params) {
  return (
    <MainLayout>
      <HeroImageService
        imgURL={"/assets/images/home/hero/TUY_0011.jpg"}
        description={"Гэр бүлийн зураг авалт, Хуримын зураг авалт"}
        title={"ФОТО ВИДЕО ҮЙЛЧИЛГЭЭ"}
      />
      <Container>
        <Stack spacing={2} my={2} alignItems={"center"}>
          <Box>
            <Typography variant="h2" fontWeight={"bold"} textAlign={"center"}>
              Фото, Видео үйлчилгээ
            </Typography>
            <Typography fontWeight={"bold"}>Фото, видео студи</Typography>
            <Typography>
              1. Хуримын ордны зураг <br />
              2. Хотын болон натур зураг <br />
              3. Студи зураг
            </Typography>
            <Typography fontWeight={"bold"}>Видео</Typography>
            <Typography>
              1. Эхлэл шторк видео <br />
              2. Танилцсан түүх видео <br />
              3. Талархлын видео <br />
              4. Background видео <br />
              5. Photo Slide видео <br />
              6. Хуримын өдрийн бүрэн видео <br />
              7. Найзуудын мэндчилгээ видео
            </Typography>
            <Typography fontWeight={"bold"}>ФОТО</Typography>
            <Typography>
              1. Натур зураг авалт <br />
              2. Хотын зураг авалт <br />
              3. Студи зураг авалт <br />
              4. Хуримын өдрийн зураг авалт <br />
              5. Хуримын ордны зураг авалт
            </Typography>
          </Box>
        </Stack>
        <CarouselCenterMode data={dataPlaceholder.slice(4, 8)} />
        <ControlledForm />
      </Container>
    </MainLayout>
  );
}
