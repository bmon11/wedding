"use client";

import MainLayout from "src/layouts/main";
import HeroImage from "src/components/image/hero-image";
import { Grid, Typography, Container } from "@mui/material";
import GridItem from "src/components/grid-item/grid-item";

const data = [
  {
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
  {
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
  {
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
  {
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
  {
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
  {
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
  {
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
  {
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
  {
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
  {
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
];

export default function MembersView(params) {
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
        <Typography
          fontSize={"1.5rem"}
          fontWeight={"bold"}
          textAlign={"center"}
          marginY={3}
        >
          Манай Хамт Олон
        </Typography>
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
      </Container>
    </MainLayout>
  );
}
