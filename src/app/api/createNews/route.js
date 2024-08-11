import { PrismaClient } from "@prisma/client";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "./auth/[...nextauth]";
import { NextResponse } from "next/server";
// import { isAsyncFunction } from "util/types";

const prisma = new PrismaClient();

export async function GET(request) {
  return NextResponse.json({ message: "Hello world get" }, { status: 200 });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, editorContent, thumbnail_url, isPublished, subtitle } = body;

    const numericalBool = isPublished ? 1 : 0;
    const newBlog = await prisma.blog.create({
      data: {
        title: title,
        body: editorContent,
        subtitle: subtitle,
        thumbnail_url: thumbnail_url,
        is_published: numericalBool,
        createdDate: new Date(),
      },
    });

    return NextResponse.json({ message: "Succeeded" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal service error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
async function handler(req, res) {
  console.log("createNews is called");
  //   const session = await getServerSession(req, res, authOptions);
  //   if (!session) {
  //     res.status(401).json({ error: "Not authenticated user" });
  //   }

  try {
    if (req.method === "POST") {
      const { title, editorContent, thumbnail_url, isPublished } = req.body;
      console.log(res.body);

      // print(res.body);
      // const numericalBool = isPublished ? 1 : 0;

      // const newBlog = await prisma.blog.create({
      //   data: {
      //     title: title,
      //     body: editorContent,
      //     thumbnail_url: thumbnail_url,
      //     is_published: numericalBool,
      //     createdDate: new Date(),
      //   },
      // });
      res.status(200).json("succeeded");

      //      res.status(200).json(newBlog);
    } else {
      res.status(405).json({ method: "Method not allowed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
