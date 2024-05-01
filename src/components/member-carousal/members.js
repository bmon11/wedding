"use client";

import MainLayout from "src/layouts/main";
import HeroImage from "src/components/image/hero-image";
import { Grid, Typography, Container } from "@mui/material";
import GridItem from "src/components/grid-item/grid-item";

export default function Members({ data }) {
  return (
    <Grid
      container
      spacing={2}
      margin={"auto"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {data.map((item) => (
        <GridItem imgURL={item.imgURL} description={item.description} />
      ))}
    </Grid>
  );
}
