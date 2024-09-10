import { PrismaClient } from "@prisma/client";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "./auth/[...nextauth]";
import { NextResponse } from "next/server";
// import { isAsyncFunction } from "util/types";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const blogs = await prisma.blog.findMany();

    return NextResponse.json(
      { message: "Succeeded", body: blogs },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Internal error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = parseInt(searchParams.get("id"));
  const body = await request.json();
  const { title, editorContent, thumbnail_url, isPublished, subtitle, type } =
    body;

  const numericalBool = isPublished ? 1 : 0;

  try {
    const res = await prisma.blog.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        body: editorContent,
        subtitle: subtitle,
        thumbnail_url: thumbnail_url,
        is_published: numericalBool,
        createdDate: new Date(),
        type: type,
      },
    });

    return NextResponse.json({ message: "Succeeded" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  try {
    const deletedBlog = await prisma.blog.delete({
      where: {
        id: parseInt(id),
      },
    });

    if (deletedBlog) {
      return NextResponse.json({ message: "Succeeded" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Internal error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
