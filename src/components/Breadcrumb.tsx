"use client";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
export default function BreadCrumb() {
  const pathname = usePathname();
  const path = pathname.split("/");
  console.log(path);

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      // onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/menu"
      // onClick={handleClick}
    >
      Menu
    </Link>,
    <Typography key="3" color="text.primary">
      {path.length === 3 ? path[2] : "all"}
    </Typography>,
  ];
  return (
    <Breadcrumbs className="pt-[6rem] md:text-base text-sm bg-background px-10">
      {breadcrumbs}
    </Breadcrumbs>
  );
}
