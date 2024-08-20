import { PrismaClient } from "@prisma/client";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "./auth/[...nextauth]";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
// import { isAsyncFunction } from "util/types";

const prisma = new PrismaClient();
const secretKey = process.env.JWT_SECRET;

export async function GET(request) {
  return NextResponse.json({ message: "Development Test" }, { status: 200 });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const user = await prisma.user.findUnique({
      where: {
        username: email,
        password: password,
      },
    });

    if (user) {
      const accessToken = jwt.sign(
        {
          email: user.email,
          id: 1,
        },
        secretKey,
        { expiresIn: "2h" }
      );
      return NextResponse.json(
        { message: "Succeeded", user: user.email, accessToken: accessToken },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "User name or password wrong" },
        { status: 403 }
      );
    }
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
