"use client";
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
import data from "./data-placeholder";
import { useResponsive } from "src/hooks/use-responsive";

export default function IndividualNewsView({ id }) {
  const dataObj = data[id];
  const mdUp = useResponsive("up", "md");

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
              <Image src={dataObj.imgURL} ratio={"16/9"} />
              <Typography>{dataObj.timestamp}</Typography>
              <Typography variant="h6">{dataObj.title}</Typography>
              <Typography textAlign={"justify"}>{dataObj.content}</Typography>
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
                <Image ratio={"9/16"} />
              </Stack>
            </Grid>
          )}
        </Grid>
      </Container>
    </MainLayout>
  );
}
