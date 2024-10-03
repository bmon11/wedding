"use client";

import MainLayout from "src/layouts/main";
import HeroImageService from "src/components/image/hero-image-service";
import { Typography, Container } from "@mui/material";
import Members from "src/components/member-grid/members";
import { caligraphicFont } from "src/theme/typography";
import Image from "src/components/image/image";
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

export default function TransparencyHR(params) {
  return (
    <MainLayout>
      <HeroImageService
        imgURL={"/assets/images/home/hero/TUY_0011.jpg"}
        description={
          "The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style."
        }
        title={"Хүний нөөцийн ил тод байдал"}
      />
      <Container>
        <Typography
          variant="h2"
          align="center"
          my={5}
          fontFamily={caligraphicFont.style.fontFamily}
        >
          Хүний нөөцийн ил тод байдал
        </Typography>

        {/* <Typography variant="body1" textAlign={"justify"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <br /> */}
        {/* <Typography variant="body1" textAlign={"justify"} mb={5}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur
        </Typography>
        <Members data={data} /> */}
        <Image src={"/assets/images/hr/hunii-nuutsiin-il-tod-baidal.png"} />
      </Container>
    </MainLayout>
  );
}
