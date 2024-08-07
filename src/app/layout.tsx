import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CartItemProvider } from "@/hooks/CartItemHook";
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Cafe Street",
  description: "Created By Garima Mangal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <CartItemProvider>{children}</CartItemProvider>
      </body>
    </html>
  );
}
