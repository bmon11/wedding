"use client";
import MainLayout from "src/layouts/main";
import HeroImageService from "src/components/image/hero-image-service";
import { Container, Typography, Stack, Box, Grid } from "@mui/material";
import ControlledForm from "src/components/form";
import { dataPlaceholder } from "../carousel-view/data-placeholder";
import CarouselCenterMode from "../carousel-view/carousel-center-mode";
import { caligraphicFont } from "src/theme/typography";

export default function ArrangementView(params) {
  return (
    <MainLayout>
      <HeroImageService
        imgURL={
          "https://images.adsttc.com/media/images/5f17/35c7/b357/65da/b000/0006/large_jpg/TGWM_065_DC76368_L.jpg?1595356596"
        }
        description={
          "Гэрлэх ёслолын ордон таны хуримын өдрийг Ёслол төгөлдөр зохион байгуулна"
        }
        title={"Зохион Байгуулах Үйлчилгээ"}
      />
      <Container>
        <Stack spacing={2} my={2}>
          <Typography
            variant="h2"
            fontWeight={"bold"}
            textAlign={"center"}
            fontFamily={caligraphicFont.style.fontFamily}
          >
            Зохион Байгуулах Үйлчилгээ
          </Typography>

          <Typography fontWeight={"bold"}>Нэгдүгээр хэсэг:</Typography>
          <Typography>
            1. Ёслолын өдөр хос, 2 бэргэн захиалсан цагаасаа 30 - 40 минутын
            өмнө ирж ёслолын бэлтгэлээ хангана.
            <br />
            2. Хос бэлтгэлээ хангасны дараа гэрлэх ёслолын ордны ажилтан ёслолын
            үйл ажиллагааны дарааллын талаар тайлбарлан зөвлөгөө өгнө.
            <br />
            3. Ёслолын үйл ажиллагаа эхлэхийн өмнө гол шатны өмнө хос, 2 бэргэн
            гэр бүлийн хамт байрлан зогсооно.
            <br />
            4. Хөгжмийн аяаар хаалга нээгдэхэд хос гэр бүл болон зочдын хамт
            ёслолын их танхимд байрлан зогсоно.
            <br />
            5. Ёслолын үйл ажиллагааг ёслол удирдагч нээн үг хэлнэ.
            <br />
            6. Хууль ёсны асуулт асууна.
            <br />
            7. Гэрлэх ёслолын бүртгэлд хос болон бэргэд гарын үсэг зурна.
            <br />
            8. Хос харилцан бөгжөө солилцоно.
            <br />
            9. Хос бие биедээ хүндэтгэл үзүүлнэ.
            <br />
            10. Гэрлэх ёслолын ордонд ёслолоо ёслол төгөлдөр тэмдэглэсний
            батламж, дурсгалын зүйл гардан авах.
            <br />
            11. Ёслолын их танхимд хос, хос - хүүхдийн хамт дурсгалын зураг
            авахуулах.
            <br />
          </Typography>
          <Typography fontWeight={"bold"}>Хоёр дугаар хэсэг:</Typography>
          <Typography>
            1. Ерөөлч нээлтийн үг хэлнэ
            <br />
            2. Бэр бэлгэдлийн гал бадраана.
            <br />
            3. Хүүгийн аав болон тухайн гэр бүлийн хүндтэй хүн хосдоо хандаж
            баярын үг хэлнэ.
            <br />
            4. Ирсэн зочид болон хосд хандаж гэрлэх ёслолын ордоны ерөөлч ерөөл
            айлдана. /энэ үед зочдод ааруул сүү идээний дээж барина./
          </Typography>
          <Typography fontWeight={"bold"}>Гуравдугаар хэсэг:</Typography>
          <Typography>
            1. Их хаалганы өмнө хос - аав ээжийн хамт, хос - хоёр бэргэнтэй, хос
            – хүүхдүүдийн хамт дурсгалын зураг авахуулах.
            <br />
            2. Гол шатан дээр ирсэн зочдын хамт дурсгалын зураг авахуулах.
            <br />
            3. Хос, хоёр талын аав ээж, хүүхдүүд, хоёр талын зочдын хамт
            дурсгалын зураг авахуулсанаар ёслолын үйл ажиллагаа 40-50 минутын
            хугацаанд үргэлжлэн дуусна.
          </Typography>
          <Typography fontWeight={"bold"}>Нэмэлт үйлчилгээ:</Typography>
          <Typography>
            1. Их Өргөө гэр/хуримын ёслол, найр зохион байгуулна/ <br />
            2. Хуримын хувцасны худалдаа <br />
            3. Хуримын хувцас, гэрчийн даашинз түрээсийн үйлчилгээ/Үндэсний
            хувцас болон орчин үеийн хуримын даашинз, хослол/ <br />
            4. Бүх төрлийн гоёл, чимэглэл <br />
            5. Зочид угтах үйлчилгээ /тусгай танхимд/ <br />
            6. Багц 1 / халуун хүйтэн уух зүйлс, жимс, жигнэмэг, оргилуун дарс /{" "}
            <br />
            7. Багц 2 / халуун хүйтэн уух зүйлс, жимс, жигнэмэг, халуун хүйтэн
            зууш, оргилуун дарс /
          </Typography>
          <CarouselCenterMode data={dataPlaceholder.slice(0, 4)} />
          <ControlledForm />
        </Stack>
      </Container>
    </MainLayout>
  );
}
