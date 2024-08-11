import { PrismaClient } from "@prisma/client";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "./auth/[...nextauth]";
import { NextResponse } from "next/server";
// import { isAsyncFunction } from "util/types";

const prisma = new PrismaClient();

export async function GET(request) {
  const { id } = request;

  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: id,
      },
    });
    if (blog) {
      return NextResponse.json(
        { message: "Succeeded", body: blog },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "Not found" }), { status: 404 };
    }
  } catch (error) {
    return NextResponse.json({ message: "Internal error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
