import { db } from "src/lib/db";

import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = body;
    console.log(body);
    // check if user exists
    const existingUser = await db.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return NextResponse.json(
        { user: null, message: "User exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "User created successfully" },
      { status: 400 }
    );
  } catch (error) {}
}
