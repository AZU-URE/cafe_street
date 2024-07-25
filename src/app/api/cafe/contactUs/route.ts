import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
export async function POST(req: NextRequest) {
  //   return NextResponse.json("Hello from api");
  const { name, email, message } = await req.json();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_MY_EMAIL,
      pass: process.env.NEXT_PUBLIC_MY_PASS,
    },
  });
  const MailOptions: Mail.Options = {
    from: email,
    to: process.env.NEXT_PUBLIC_MY_EMAIL,
    cc: email,
    subject: `Query from Cafestreet customer a Cafe Owner :${name} `,
    text: message,
  };
  const sendMailPromise = () => {
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(MailOptions, (err, info) => {
        if (!err) {
          resolve("Mail sent successfully");
        } else {
          reject(err);
        }
      });
    });
  };
  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Mail sent successfully" });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
