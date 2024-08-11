"use client";

import { useEffect, useState } from "react";
import MainLayout from "src/layouts/main";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import HorizontalNewsCard from "src/components/news-card/horizontal-news-card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import Image from "src/components/image/image";

import HeroImage from "src/components/image/hero-image";
import { useResponsive } from "src/hooks/use-responsive";
// Section for main image
// Main section 2/3 of page is a column of main news, on right banner, types,
import data from "src/sections/individual-news/data-placeholder";
import axios, { endpoints } from "src/utils/axios";

export default function NewsView(params) {
  const mdUp = useResponsive("up", "md");

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/news/list");
        setNewsData(response.data.body);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <MainLayout>
      <HeroImage
        imgURL={
          "https://images.adsttc.com/media/images/5f17/35c7/b357/65da/b000/0006/large_jpg/TGWM_065_DC76368_L.jpg?1595356596"
        }
        description={
          "The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style."
        }
        title={"Мэдээ Мэдээлэл"}
      />

      <Container sx={{ mt: 2 }}>
        {!mdUp && (
          <Box sx={{ my: 4 }}>
            <Typography variant="h5">Мэдээний төрөл</Typography>
            <Stack direction={"row"}>
              <Button>• Эмэгтэйчүүд</Button>
              <Button>• Эрчүүд</Button>
              <Button>• Энтертайнмэнт</Button>
              <Button>• Ёс заншил</Button>
            </Stack>
          </Box>
        )}
        <Grid container>
          <Grid item key={"0"} md={8}>
            <Stack spacing={2}>
              {newsData.map((item, index) => (
                <HorizontalNewsCard
                  id={item.id}
                  key={item.id}
                  imgURL={item.thumbnail_url}
                  title={item.title}
                  content={item.subtitle}
                  timestamp={item.createdDate.split("T")[0]}
                />
              ))}
            </Stack>
          </Grid>
          {mdUp && (
            <Grid item key={"1"} md={4}>
              <Stack sx={{ ml: "10%" }}>
                <Box>
                  <List dense>
                    <ListItem>
                      <Typography variant="h5">Мэдээний төрөл</Typography>
                    </ListItem>
                    <ListItem>
                      <Button>• Эмэгтэйчүүд</Button>
                    </ListItem>
                    <ListItem>
                      <Button>• Эрчүүд</Button>
                    </ListItem>
                    <ListItem>
                      <Button>• Энтертайнмэнт</Button>
                    </ListItem>
                    <ListItem>
                      <Button>• Ёс заншил</Button>
                    </ListItem>
                  </List>
                </Box>

                <Stack>
                  <Box>
                    <List dense>
                      <ListItem>
                        <Typography variant="h5">Холбоо барих</Typography>
                      </ListItem>
                      <ListItem>
                        <Typography>
                          • УБ хот, ЧД, 1-р хороо, Шангрилла оффис, 15 давхар
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography>• Утас: "(+976)77777777"</Typography>
                      </ListItem>
                    </List>
                  </Box>
                </Stack>
                <Image />
              </Stack>
            </Grid>
          )}
        </Grid>
      </Container>
    </MainLayout>
  );
}
