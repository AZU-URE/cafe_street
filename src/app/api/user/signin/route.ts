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

export async function POST(request: NextRequest) {
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

    // const token = jwt.sign(
    //   { name: user.name, email: user.email },
    //   process.env.TOKEN_SECRET!,
    //   {
    //     expiresIn: "1d",
    //   }
    // );

    // const newSession = await prisma.session.create({
    //   data: {
    //     jwtToken: token,
    //     userId: user.id,
    //     user: {
    //       // id: user.id,
    //     },
    //   },
    // });
    // console.log(newSession);

    const response = NextResponse.json({ message: "User Signed In" });
    // response.cookies.set("token", token, {
    //   httpOnly: true,
    // });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
