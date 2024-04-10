"use client";
import MainLayout from "src/layouts/main";
import Image from "src/components/image/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";

// Section for main image
// Main section 2/3 of page is a column of main news, on right banner, types,

export default function NewsView(params) {
  return (
    <MainLayout>
      <CardContent>
        <Image
          src={
            "https://www.werehamvillagehall.co.uk/wp-content/uploads/2018/06/WVH-Main-Hall-e1529051185800.jpg"
          }
          ratio={"9/2"}
        />
      </CardContent>
      <Container>
        <>main</>
      </Container>
    </MainLayout>
  );
}
