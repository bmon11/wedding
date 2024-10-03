"use client";
import { useEffect, useState } from "react";
import MainLayout from "src/layouts/main";
import HeroImage from "src/components/image/hero-image";
import {
  Container,
  Grid,
  Stack,
  Box,
  List,
  ListItem,
  Typography,
  Button,
} from "@mui/material";
import Image from "src/components/image/image";
import { useResponsive } from "src/hooks/use-responsive";
import axios from "src/utils/axios";
import { useRouter } from "src/routes/hooks";
import { useAuthContext } from "src/auth/hooks";
import axiosInstance from "src/utils/axios";

export default function IndividualNewsView({ id }) {
  const router = useRouter();
  const mdUp = useResponsive("up", "md");
  const [newsData, setNewsData] = useState();
  const authenticated = useAuthContext();

  const handleRedirect = () => {
    router.replace("/news");
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("accessToken");

      try {
        const response = await axiosInstance.get(`/api/news/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("response", response.data.body);

        setNewsData(response.data.body);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const deleteData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`/api/news/?id=${id}`);

      if (response.status === 200) {
        router.replace("/news");
      } else {
        console.log("Error deleting data:", response);
      }
    } catch (error) {
      console.log("Error deleting data:", error);
    }
  };

  const updateData = async (e) => {
    e.preventDefault();
    router.replace(`/news/update?id=${id}`);
  };

  return (
    <MainLayout>
      <HeroImage
        imgURL={"/assets/images/home/hero/TUY_0011.jpg"}
        description={
          "The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style."
        }
        title={"Мэдээ Мэдээлэл"}
      />

      <Container sx={{ my: 2 }}>
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
              {newsData && (
                <>
                  <Image src={newsData.thumbnail_url} ratio={"16/9"} />
                  <Typography>{newsData.createdDate.split("T")[0]}</Typography>
                  <Typography variant="h6">{newsData.title}</Typography>
                  <Typography
                    textAlign={"justify"}
                    dangerouslySetInnerHTML={{ __html: newsData.body }}
                  />
                </>
              )}
            </Stack>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Button
                sx={{ marginTop: 2 }}
                variant="contained"
                onClick={handleRedirect}
              >
                Буцах
              </Button>
              <Box>
                {authenticated.authenticated && (
                  <Button
                    sx={{
                      marginTop: 2,
                      color: "white",
                      bgcolor: "orange",
                      alignSelf: "flex-end",
                    }}
                    variant="contained"
                    onClick={updateData}
                  >
                    Шинэчлэх
                  </Button>
                )}
                {authenticated.authenticated && (
                  <Button
                    sx={{
                      marginTop: 2,
                      color: "white",
                      bgcolor: "red",
                      alignSelf: "flex-end",
                      marginLeft: 1,
                    }}
                    variant="contained"
                    onClick={deleteData}
                  >
                    Устгах
                  </Button>
                )}
              </Box>
            </Box>
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
                <Image ratio={"9/16"} />
              </Stack>
            </Grid>
          )}
        </Grid>
      </Container>
    </MainLayout>
  );
}
