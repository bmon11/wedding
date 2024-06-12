"use client";

import MainLayout from "src/layouts/main";
import HeroImage from "src/components/image/hero-image";
import { Container, Typography, Stack } from "@mui/material";
import ServiceItem from "../home/service-item";
import { caligraphicFont } from "src/theme/typography";
import Image from "src/components/image/image";
import Box from "@mui/material/Box";
 
export default function AboutView(params) {
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
            Танилцуулга
          </Typography>
          <Typography textAlign={"justify"}>
          Гэрлэх ёслолын ордон нь Монгол түмний гал голомтыг бадраан хуримын ёслолын үйл ажиллагааг эрхлэх үндсэн зорилготойгоор 1976 оны 06 сарын 14-нд байгуулагдаж одоог хүртэл үндсэн үйл ажиллагаагаараа амжилттай ажиллаж байна.
  Бид гэр бүлийн амьдралд тохиолдох дахин давтагдашгүй алтан агшинг цаг хугацаанд нь хөнгөн шуурхай, соёлтой үйлчилгээгээр ханган ажилладаг мэргэшсэн хамт олон төдийгүй залуучуудыг гэр бүлийн амьдралд бэлтгэх зорилгоор гэр бүл сургалтын төвийг ажиллуулдаг.
          <Box>
          <br/>
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
          <br/>
Залуу хосын хуримын үйл ажиллагааг зохион байгуулахдаа төрийн ёслолыг Их танхимд, гал голомт бадраах ёслолыг Бага танхимд болон Их өргөө гэрт тус тус зохион байгуулдаг. 
Тус ордон байгуулагдсан цагаасаа эхлүүлэн 40 мянга гаруй хосын Гэрлэх ёслолын үйл ажиллагааг удирдан зохион байгуулж тэдгээрийн төрөл садан, зочин төлөөлөгч болох 2,5 сая иргэдэд үйлчилсэн байна. 
          </Typography>
          <></>
          <Box>
          <Image 
            dir="ltr"
            alt={"Greetings"}
            src={"/assets/images/about/entrance.jpg"}
            ratio="21/9"
            maxWidth={"70%"}
            sx={{
              border: 0,
              borderRadius: 1,
              marginLeft: '15%'
            }}/>
          </Box>
          <Typography textAlign={"justify"}>
          Манай ордон зөвхөн Гэрлэх ёслолын үйл ажиллагаа зохион байгуулахаас гадна хуримын тэмдэглэлт ой Есөн эрдэнийн хурим Очир-Эрдэнийн хурим, Алтан хурим ,Оюу хурим, Сувдан хурим, Мөнгөн хурим,  Тана хурим, мөн  Олон улсын гэр бүлийн өдөр,  Нийслэл хот байгуулагдсаны ойг тохиолдуулан гэр бүлүүдтэйгээ хамт тэмдэглэн өнгөрүүлж гэрлэх ёслолыг зохион байгуулдаг уламжлалтай.
          </Typography>
          <Box>
            <Image 
              dir="ltr"
              alt={"Greetings"}
              src={"/assets/images/about/gerchilgee.jpg"}
              ratio="21/9"
              maxWidth={"70%"}
              sx={{
                border: 0,
                borderRadius: 1,
                marginLeft: '15%'
              }}/>
          </Box>
        </Stack>
      </Container>
      <ServiceItem />
    </MainLayout>
  );
}
