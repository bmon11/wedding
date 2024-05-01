"use client";

import MainLayout from "src/layouts/main";
import HeroImageService from "src/components/image/hero-image-service";
import { Typography } from "@mui/material";

export default function TransparencyHR(params) {
  return (
    <MainLayout>
      <HeroImageService
        imgURL={
          "https://images.adsttc.com/media/images/5f17/35c7/b357/65da/b000/0006/large_jpg/TGWM_065_DC76368_L.jpg?1595356596"
        }
        description={
          "The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style."
        }
        title={"Хүний нөөцийн ил тод байдал"}
      />
      <Typography>Lorem</Typography>
    </MainLayout>
  );
}
