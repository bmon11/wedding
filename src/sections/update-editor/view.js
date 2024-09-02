"use client";
import { useEffect, useState } from "react";

import MainLayout from "src/layouts/main";
import { AuthGuard } from "src/auth/guard";
import axiosInstance from "src/utils/axios";
import { useSearchParams } from "src/routes/hooks";

import {
  Container,
  Input,
  InputLabel,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";

import { useRouter } from "src/routes/hooks";

export default function UpdateEditor(params) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [newsData, setNewsData] = useState();

  const handleRedirect = () => {
    router.replace("/news");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/api/news/${id}`);

        console.log("respose", response.data.body);
        setNewsData(response.data.body);
      } catch (error) {
        console.log("Error fetchig data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <AuthGuard>
      <MainLayout>
        <Container sx={{ mt: "50px" }}>
          <Typography fontWeight={"bold"} textAlign={"center"}>
            Мэдээ шинэчлэх
          </Typography>
        </Container>
      </MainLayout>
    </AuthGuard>
  );
}
