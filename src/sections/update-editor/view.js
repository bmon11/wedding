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
  FormControl,
} from "@mui/material";

import { useRouter } from "src/routes/hooks";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  { ssr: false }
);

export default function UpdateEditor(params) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [newsData, setNewsData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [thumbnail_url, setUrl] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [editorContent, setEditorContent] = useState(
    "Create your news content here"
  );
  const [type, setType] = useState(0);

  // Handlers
  const handleRedirect = () => {
    router.replace("/news");
  };

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleIsPublishedChange = () => {
    setIsPublished(!isPublished);
  };
  const handleChange = (e) => {
    console.log("e is ", e);
    setType(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/api/news/${id}`);

        console.log("respose", response.data.body);
        const body = response.data.body;
        setNewsData(body);

        // Setting invidual properties
        setTitle(body.title);
        setUrl(body.thumbnail_url);
        setIsPublished(body.is_published);
        setSubtitle(body.subtitle);

        setIsLoading(false);
      } catch (error) {
        console.log("Error fetchig data", error);
      }
    };
    fetchData();
  }, []);

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const content = {
        title,
        editorContent,
        thumbnail_url,
        isPublished,
        subtitle,
        type,
      };
      const res = await fetch(`/api/news?id=${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });

      console.log(res);

      if (res.status === 200) {
        router.replace(`/news/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthGuard>
      <MainLayout>
        <Container sx={{ mt: "50px" }}>
          <Typography fontWeight={"bold"} textAlign={"center"}>
            Мэдээ шинэчлэх
          </Typography>

          {isLoading ? (
            <>Уншиж байна</>
          ) : (
            <form onSubmit={submitData}>
              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="title">Гарчиг</InputLabel>
                <Input
                  id="title"
                  aria-describedby="helper text"
                  type="text"
                  defaultValue={newsData.title || ""}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="subtitle">Дэд гарчиг</InputLabel>
                <Input
                  id="subtitle"
                  type="text"
                  defaultValue={newsData.subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="thumbnail">Thumbnail URL</InputLabel>
                <Input
                  id="thumbnail"
                  type="url"
                  defaultValue={newsData.thumbnail_url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </FormControl>
              <Editor
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_KEY}
                init={{
                  //  "ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
                  //"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",

                  plugins:
                    "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | numlist bullist indent outdent | emoticons charmap | removeformat",
                  tinycomments_mode: "embedded",
                  tinycomments_author: "Author name",
                  mergetags_list: [
                    { value: "First.Name", title: "First Name" },
                    { value: "Email", title: "Email" },
                  ],
                  ai_request: (request, respondWith) =>
                    respondWith.string(() =>
                      Promise.reject("See docs to implement AI Assistant")
                    ),
                  height: "720",
                  init_instance_callback: "insert_contents",
                }}
                initialValue={newsData.body}
                onEditorChange={handleEditorChange}
              />

              <FormControl sx={{ marginY: "15px" }} fullWidth>
                <InputLabel id="blog-type">Төрөл</InputLabel>
                <Select
                  labelId="blog-type"
                  id="blog-type"
                  label="blog type"
                  defaultValue={newsData.type}
                  onChange={handleChange}
                >
                  <MenuItem value={0}>Эрэгтэй</MenuItem>
                  <MenuItem value={1}>Эмэгтэй</MenuItem>
                  <MenuItem value={2}>Энтертайнмэнт</MenuItem>
                  <MenuItem value={3}>Ёс заншил</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={newsData.is_published === 1 ? true : false}
                    onChange={handleIsPublishedChange}
                    name="isPublished"
                    color="primary"
                  />
                }
                label="Publish"
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ paddingX: "50px", marginY: "30px", display: "block" }}
              >
                Submit
              </Button>
            </form>
          )}
        </Container>
      </MainLayout>
    </AuthGuard>
  );
}
