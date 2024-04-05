"use client";

import MainLayout from "src/layouts/main";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import HeroItem from "../hero-item";

//-------------------------------------------------------

export default function HomeView() {
  return (
    <MainLayout>
      <HeroItem />
    </MainLayout>
  );
}
