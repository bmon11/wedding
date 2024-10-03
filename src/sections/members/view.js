"use client";

import MainLayout from "src/layouts/main";
import HeroImage from "src/components/image/hero-image";
import { Grid, Typography, Container } from "@mui/material";
import GridItem from "src/components/grid-item/grid-item";
import Members from "src/components/member-grid/members";
import { caligraphicFont } from "src/theme/typography";

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
        imgURL={"/assets/images/home/hero/TUY_0011.jpg"}
        description={""}
        title={""}
      />
      <Container>
        <Typography
          variant="h2"
          fontWeight={"bold"}
          textAlign={"center"}
          marginY={3}
          fontFamily={caligraphicFont.style.fontFamily}
        >
          Манай Хамт Олон
        </Typography>
        <Members data={data} />
      </Container>
    </MainLayout>
  );
}
