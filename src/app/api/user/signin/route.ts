import { NextRequest, NextResponse } from "next/server";
import prisma from "@/config/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User Not Found" });
    }

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      return NextResponse.json({ error: "Password does not match" });
    }
    // Generate JWT token here and send it to the client side for authentication
    // request.cookies.set("to")
    const token = jwt.sign(
      { name: user.name, email: user.email },
      process.env.SECRET_TOKEN!,
      {
        expiresIn: "1d",
      }
    );
    const response = NextResponse.json({ message: "User Signed In" });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
