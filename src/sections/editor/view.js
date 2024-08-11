"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "src/routes/hooks";
import { AuthGuard } from "src/auth/guard";

// import EditorApp from "../../components/editor/editor";
import MainLayout from "src/layouts/main";
import {
  Container,
  Input,
  InputLabel,
  Button,
  FormHelperText,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
// import { Editor } from "@tinymce/tinymce-react";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  { ssr: false }
);

const EditorView = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [thumbnail_url, setUrl] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [editorContent, setEditorContent] = useState(
    "Create your news content here"
  );
  // const [isEditorLoaded, setIsEditorLoaded] = useState(false);

  // // Effects
  // useEffect(() => {
  //   setIsEditorLoaded(true);
  // }, []);

  // Handlers
  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleIsPublishedChange = () => {
    setIsPublished(!isPublished);
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const content = {
        title,
        editorContent,
        thumbnail_url,
        isPublished,
        subtitle,
      };
      const res = await fetch("/api/createNews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });

      console.log(res);

      // use Router to push to all news
      if (res.ok) {
        router.replace("/news");
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
            Create a blog news
          </Typography>
          <form onSubmit={submitData}>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="title">Title</InputLabel>
              <Input
                id="title"
                aria-describedby="helper text"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="subtitle">Subtitle</InputLabel>
              <Input
                id="subtitle"
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="thumbnail">Thumbnail URL</InputLabel>
              <Input
                id="thumbnail"
                type="url"
                value={thumbnail_url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </FormControl>
            {/* {isEditorLoaded && ( */}
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
              }}
              initialv
              alue="Happy writing draft!"
              value={editorContent}
              onEditorChange={handleEditorChange}
            />
            {/* )} */}

            <FormControlLabel
              control={
                <Checkbox
                  checked={isPublished}
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
        </Container>
      </MainLayout>
    </AuthGuard>
  );
};

export default EditorView;
