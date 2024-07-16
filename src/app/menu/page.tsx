"use client";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Filter from "@/components/Filter";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FoodCategoryCarousel from "@/components/FoodCategoryCarousel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { createClient } from "@/utils/client";
import CoffeeCard from "@/components/landingPage/coffeeCard";
import CircularProgress from "@mui/material/CircularProgress";
import { FilterState, Item } from "@/config/types";
export default function () {
  const supabase = createClient();
  const [searchParam, setSearchParam] = useState("All");
  const [itemList, setItemList] = useState<Item[]>([]);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [sort, setSort] = useState("None");
  const [filter, setFilter] = useState<FilterState>({
    rating: 1,
    priceRange: [0, 100],
    category: "all",
    type: false,
    cat_carousel: "all",
  });
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
  useEffect(() => {
    async function fetchItems() {
      const { data, error } = await supabase.from("items").select();
      if (error) {
        console.log(error);
      } else {
        // console.log(data);
        setItemList(data);
        setFilteredList(data);
      }
    }
    fetchItems();
  }, []);
  // console.log(itemList);

  return (
    <div className="min-h-screen p-10 bg-background">
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
      <div className="flex items-start justify-between mt-5 ">
        <div className="md:w-1/4 border-x-feedbackCardBorder border-2 p-5 shadow-lg bg-feedbackCardBorder/60 rounded-2xl">
          <div className="flex items-center flex-row mb-5 text-secondary">
            <FilterAltIcon className="text-3xl mr-3 " />
            <h1 className="md:text-2xl font-poppins font-semibold">Filter</h1>
          </div>
          <Filter
            setList={setFilteredList}
            Itemslist={itemList}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div className="flex items-center justify-between flex-col w-[65vw] mx-[2rem] space-y-7 relative">
          <FoodCategoryCarousel
            setList={setFilteredList}
            Itemslist={itemList}
            filter={filter}
            setFilter={setFilter}
          />
          {/* <div className="flex items-center justify-end w-full space-x-5">
            <p className="font-poppins font-semibold text-secondary">Sort</p>
            <Select
              value={sort}
              displayEmpty
              onChange={(e) => setSort(e.target.value)}
              className=" bg-transparent border-[1px] border-secondary font-poppins hover-red-500"
            >
              <MenuItem value={"None"} defaultValue={sort}>
                None
              </MenuItem>
              <MenuItem
                value={"rating-high"}
                className=" font-poppins hover:red-500"
              >
                Popularity: High to Low
              </MenuItem>
              <MenuItem value={"rating-low"}>Popularity: Low to High</MenuItem>
              <MenuItem value={"price-high"}>Price: High to Low</MenuItem>
              <MenuItem value={"price-low"}>Price: Low to High</MenuItem>
            </Select>
          </div> */}
          <div className="grid grid-cols-3 gap-12 w-full">
            {filteredList.length != 0 ? (
              filteredList.map((el) => {
                return <CoffeeCard item={el} key={el.id} />;
              })
            ) : itemList.length == 0 ? (
              <div className="w-full absolute flex items-center justify-center bottom-[0] ">
                <CircularProgress />
              </div>
            ) : (
              <p className="w-full absolute flex items-center justify-center bottom-[0] font-bold font-poppins lg:text-2xl md:text-xl text-base text-secondary">
                No items Match Your Result
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
