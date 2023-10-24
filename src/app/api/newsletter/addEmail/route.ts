import prisma from "@/config/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;
    // console.log(email);
    const found = await prisma.newsletter.findUnique({
      where: { email: email },
    });
    if (found) {
      return NextResponse.json({
        message: `email already present`,
        success: true,
      });
    } else {
      const result = await prisma.newsletter.create({ data: { email: email } });
      // console.log(result);
      return NextResponse.json({ message: `email added`, success: true });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
