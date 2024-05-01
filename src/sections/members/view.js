"use client";

import MainLayout from "src/layouts/main";
import HeroImage from "src/components/image/hero-image";
import { Grid, Typography, Container } from "@mui/material";
import GridItem from "src/components/grid-item/grid-item";
import Members from "src/components/member-grid/members";

const data = [
  {
    id: 0,
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
  {
    id: 1,
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
  {
    id: 2,
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
  {
    id: 3,
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
  {
    id: 4,
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
  {
    id: 5,
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
  {
    id: 6,
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
  {
    id: 7,
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
  {
    id: 8,
    imgURL:
      "https://img.freepik.com/premium-photo/asian-girl-thinking-doubts-cartoon-illustration-cute-kid-character-with-dreamy-face-abstract-background-ai-generated-bright-drawn-colorful-poster_107173-44008.jpg",
    description: "lorem is a just novel written in latin.",
  },
  {
    id: 9,
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
        <Members data={data} />
      </Container>
    </MainLayout>
  );
}
