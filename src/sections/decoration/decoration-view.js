"use client";
import MainLayout from "src/layouts/main";
import HeroImageService from "src/components/image/hero-image-service";
import { Container, Typography, Stack, Box, Grid } from "@mui/material";
import ControlledForm from "src/components/form";
import { dataPlaceholder } from "../carousel-view/data-placeholder";
import CarouselCenterMode from "../carousel-view/carousel-center-mode";
import GridItem from "src/components/grid-item/grid-item";

export default function DecorationView(params) {
  return (
    <MainLayout>
      <HeroImageService
        imgURL={
          "https://images.adsttc.com/media/images/5f17/35c7/b357/65da/b000/0006/large_jpg/TGWM_065_DC76368_L.jpg?1595356596"
        }
        description={
          "Машины чимэглэл, Гэрчийн даашинз, Хуримын даашинз түрээс худалдаа"
        }
        title={"Худалдаа үйлчилгээ"}
      />
      <Container>
        <Stack spacing={2} my={2} alignItems={"center"}>
          <Typography variant="h2" fontWeight={"bold"} textAlign={"center"}>
            Худалдаа үйлчилгээ
          </Typography>
          <Box>
            <Typography fontWeight={"bold"} textAlign={"left"} marginY={"7px"}>
              Сүйт бүсгүй:
            </Typography>
            <Typography textAlign={"left"} marginY={"7px"}>
              1. Даашинз
              <br />
              2. Туслах хэрэгсэл
              <br />
            </Typography>
            <Typography textAlign={"left"} marginY={"7px"}>
              a. Гивлүүр
              <br />
              b. Титэм
              <br />
              c. Толгойн гоёл
              <br />
              d. Ээмэг
              <br />
              e. Зүүлт
              <br />
              f. Бээлий
              <br />
              g. Хормой
              <br />
              h. Малгай
              <br />
              i. Сүйт бүсгүйн гарын цэцэг
            </Typography>

            <Typography fontWeight={"bold"} marginY={"7px"}>
              Сүйт залуу:
            </Typography>
            <Typography>
              1. Зангиа
              <br />
              2. Зангиан ком
              <br />
              3. Энгэрийн цэцэг
            </Typography>
            <Typography fontWeight={"bold"} marginY={"7px"}>
              Гэрч бүсгүйчүүд:
            </Typography>
            <Typography>
              1. Даашинз
              <br />
              2. Тогойн гоёл
              <br />
              3. Бугуйн цэцэг
              <br />
              4. Гарын цэцэг
              <br />
              5. Бээлий
              <br />
              6. Шүхэр
              <br />
              7. Дэвүүр
            </Typography>

            <Typography fontWeight={"bold"} marginY={"7px"}>
              Гэрч залуучууд:
            </Typography>
            <Typography>
              1. Зангиа /урт/
              <br />
              2. Зангий /эрвээхий/
              <br />
              3. Зангий ком /ойм, зангиа, энгэрийн чимэглэл,
              <br /> мөрөвч, запник, зангиа хавчаар/
              <br />
              4. Энгэрийн цэцэг
            </Typography>
          </Box>
        </Stack>
        <CarouselCenterMode data={dataPlaceholder.slice(0, 4)} />
        <ControlledForm />
      </Container>
    </MainLayout>
  );
}
