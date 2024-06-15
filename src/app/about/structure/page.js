"use client";

import MainLayout from "src/layouts/main";
import Image from "src/components/image/image";
import { Container, Box, Typography } from "@mui/material";
import HeroImage from "src/components/image/hero-image";
import { caligraphicFont } from "src/theme/typography";

export default function StructurePage(params) {
  return (
    <MainLayout>
      <HeroImage
        imgURL={
          "https://images.adsttc.com/media/images/5f17/35c7/b357/65da/b000/0006/large_jpg/TGWM_065_DC76368_L.jpg?1595356596"
        }
        description={""}
        title={""}
      />
      <Container>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            variant="h2"
            fontWeight={"bold"}
            my={4}
            fontFamily={caligraphicFont.style.fontFamily}
          >
            Байгууллагын бүтэц
          </Typography>
          <Image
            src={
              "/assets/images/hr/hr.png"
            }
            ratio={"16/9"}
          />
        </Box>
      </Container>
    </MainLayout>
  );
}
