"use client";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Filter from "@/components/Filter";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
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
    <div className="min-h-screen max-h-fit max-w-screen p-10 bg-background">
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
      <div className="flex items-center justify-between mt-5">
        <div className="md:w-1/4 border-x-feedbackCardBorder border-2 p-5 shadow-lg bg-feedbackCardBorder/60 rounded-2xl">
          <div className="flex items-center flex-row mb-5 text-secondary">
            <FilterAltIcon className="text-3xl mr-3 " />
            <h1 className="md:text-2xl font-poppins font-semibold">Filter</h1>
          </div>
          <Filter />
        </div>
        <div>for menu</div>
      </div>
    </div>
  );
}
