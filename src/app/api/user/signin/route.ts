import { NextRequest, NextResponse } from "next/server";
import prisma from "@/config/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

type User = {
  id: string;
  email: string;
  name: string;
  // role: UserType;
  password: string;
  contact: string;
  token: string | null;
  tokenExpiresAt: Date | null;
  isVerified: boolean;
  createdAt: Date;
} | null;

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const user: User = await prisma.user.findUnique({
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

    const token = jwt.sign(
      { name: user.name, email: user.email },
      process.env.TOKEN_SECRET!,
      {
        expiresIn: "1d",
      }
    );
    // const currTime = new Date(z);
    // console.log(currTime);
    // console.log(currTime + 24 * 1000 * 60 * 60);
    const response = NextResponse.json({
      message: "User Signed In",
      data: { userId: user.id, user: user, token: token },
      status: 200,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
