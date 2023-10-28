import prisma from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const body: any = await request.json();
    const { name, contact, email, password } = body;
    console.log(email);

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const passHash = await bcrypt.hash(password, salt);
      //   crating user
      const newUser = await prisma.user.create({
        data: {
          email: email,
          password: passHash,
          name: name,
          contact: contact,
        },
      });
      return NextResponse.json({
        message: "User Created, go to signin",
        success: true,
        newUser,
      });
    } else {
      return NextResponse.json({ message: "User already exist, go to signin" });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
