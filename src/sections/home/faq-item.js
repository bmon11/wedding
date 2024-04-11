"use client";

import { useState } from "react";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { paths } from "src/routes/paths";

import { _mock } from "src/_mock";

import Iconify from "src/components/iconify";
// import CustomBreadcrumbs from "src/components/custom-breadcrumbs";

// import ComponentHero from "src/sections/_examples/component-hero";

// import ComponentBlock from "../component-block";

// ----------------------------------------------------------------------

const _accordions = [
  { heading: "Заавал НДШ төлөх ёстой юу?", detail: "Мэдэхгүй" },
  { heading: "Заавал НДШ төлөх ёстой юу?", detail: "Мэдэхгүй" },
  { heading: "Заавал НДШ төлөх ёстой юу?", detail: "Мэдэхгүй" },
  { heading: "Заавал НДШ төлөх ёстой юу?", detail: "Мэдэхгүй" },
];

// ----------------------------------------------------------------------

export default function FAQItem() {
  const [controlled, setControlled] = useState(false);

  //   const handleChangeControlled = (panel) => (event, isExpanded) => {
  //     setControlled(isExpanded ? panel : false);
  //   };

  return (
    <Container sx={{ my: 10 }}>
      <Typography variant="h3" textAlign={"center"}>
        Түгээмэл Асуултууд
      </Typography>

      {_accordions.map((accordion, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}
          >
            <Typography variant="subtitle1">{accordion.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{accordion.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
