"use client";

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

  const [itemList, setItemList] = useState<Item[]>([]);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [sort, setSort] = useState("None");
  const [showFilterOptn, setFilterOptn] = useState(false);
  const [filter, setFilter] = useState<FilterState>({
    rating: 1,
    priceRange: [0, 100],
    category: "all",
    type: false,
    cat_carousel: "all",
  });

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
    <div className="min-h-screen sm:px-10 px-5 bg-background pb-10">
      <div className=" md:text-base text-sm flex flex-col">
        <h1 className="mt-10 lg:text-7xl md:text-5xl text-3xl text-secondary font-semibold font-poppins lg:text-left text-center">
          A Cup of Joy, A Plate of Perfection
        </h1>
        <p className="mt-7 lg:w-1/2 text-light lg:text-left text-center md:text-base text-sm">
          Discover the perfect fusion of rich, aromatic coffees and freshly
          baked delights. Our carefully crafted blends and gourmet treats are
          designed to make every moment a little more special. Indulge in
          flavors that inspire and invigorate your senses.
        </p>
      </div>
      <div className="flex items-start justify-between mt-5 ">
        <div className=" lg:flex flex-col hidden lg:w-1/4 border-x-feedbackCardBorder border-2 p-5 shadow-lg bg-feedbackCardBorder/60 rounded-2xl">
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
        <div className="flex items-end justify-between flex-col lg:w-[65vw] w-full lg:mx-[2rem] lg:space-y-7 relative">
          <FoodCategoryCarousel
            setList={setFilteredList}
            Itemslist={itemList}
            filter={filter}
            setFilter={setFilter}
          />
          <div
            className="lg:hidden flex items-center justify-end flex-row mb-5 text-secondary border-[1px] border-secondary rounded-md p-1"
            onClick={() => {
              setFilterOptn((prev) => !prev);
            }}
          >
            <FilterAltIcon className="text-xl mr-3=1 " />
            <h1 className="text-base font-poppins font-semibold">Filter</h1>
          </div>

          {showFilterOptn && (
            <div className="lg:hidden flex w-full border-x-feedbackCardBorder border-2 p-2 shadow-lg bg-feedbackCardBorder/60 rounded-2xl mb-5">
              <div className="flex items-center flex-row mb-5 text-secondary"></div>
              <Filter
                setList={setFilteredList}
                Itemslist={itemList}
                filter={filter}
                setFilter={setFilter}
              />
            </div>
          )}
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
          <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-12 gap-4 w-full">
            {filteredList.length != 0 ? (
              filteredList.map((el) => {
                return <CoffeeCard item={el} key={el.id} />;
              })
            ) : itemList.length == 0 ? (
              <div className="w-full absolute flex items-center justify-center -bottom-[2rem] ">
                <CircularProgress />
              </div>
            ) : (
              <p className="w-full absolute flex items-center justify-center -bottom-[2rem] font-bold font-poppins lg:text-2xl md:text-xl text-base text-secondary">
                No items Match Your Result
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
