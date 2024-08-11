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
