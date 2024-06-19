"use client";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useState } from "react";
import Filter from "@/components/Filter";
export default function () {
  const [searchParam, setSearchParam] = useState("All");
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
      {searchParam}
    </Typography>,
  ];
  return (
    <div className="min-h-screen min-w-screen p-10 bg-background">
      <div className="mt-[5rem] md:text-base text-sm flex flex-col">
        <Breadcrumbs>{breadcrumbs}</Breadcrumbs>
        <h1 className="mt-10 text-7xl text-secondary font-semibold font-poppins">
          A Cup of Joy, A Plate of Perfection
        </h1>
        <p className="mt-7 md:w-1/2 text-light">
          Discover the perfect fusion of rich, aromatic coffees and freshly
          baked delights. Our carefully crafted blends and gourmet treats are
          designed to make every moment a little more special. Indulge in
          flavors that inspire and invigorate your senses.
        </p>
      </div>
      <div className=""></div>
    </div>
  );
}
