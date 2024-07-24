import { Ifilter } from "@/config/types";
import Slider from "react-slick";
import { ApplyFilter } from "@/helper/common";
import { useEffect, useState } from "react";

export default function FoodCategoryCarousel({
  setList,
  Itemslist,
  filter,
  setFilter,
}: Ifilter) {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  const [selected, setSelected] = useState(-1);

  function applyItem(itemName: string, id: number) {
    setSelected(id);
    const filterItem = { ...filter, cat_carousel: itemName };
    setFilter((prev: any) => ({ ...prev, cat_carousel: itemName }));
    const updatedList = ApplyFilter(Itemslist, filterItem);
    setList(updatedList);
  }

  useEffect(() => {
    if (filter.cat_carousel === "all") setSelected(-1);
  }, [filter]);

  const list = [
    "burger",
    "chicken",
    "dosa",
    "northIndian",
    "pizza",
    "paneer",
    "paratha",
    "coffee",
    "roll",
    "thali",
  ];
  return (
    <div className="w-full md:px-10 px-7 h-fit overflow-hidden ">
      <Slider {...settings}>
        {list.map((el, id) => (
          <div
            className={`p-1 m-2 mx-3 overflow-clip rounded-full ${
              selected == id ? "bg-primary" : ""
            }`}
          >
            <img
              src={`./menu/categoryCard/${el}.avif`}
              alt=""
              className="rounded-full h-1/2"
              onClick={() => {
                applyItem(el, id);
              }}
            />
          </div>
        ))}
        {/*
        <div className="p-3 mx-3">
          <img
            src="./menu/categoryCard/chicken.avif"
            alt=""
            className="rounded-full"
            onClick={() => {updateFilter("chicken") 
              applyItem();}}
          />
        </div>
        <div className="p-3 mx-3">
          <img
            src="./menu/categoryCard/dosa.avif"
            alt=""
            className="rounded-full"
            onClick={() => updateFilter("dosa")}
          />
        </div>
        <div className="p-3 mx-3">
          <img
            src="./menu/categoryCard/northIndian.avif"
            alt=""
            className="rounded-full"
            onClick={() => updateFilter("northIndian")}
          />
        </div>
        <div className="p-3 mx-3">
          <img
            src="./menu/categoryCard/paneer.avif"
            alt=""
            className="rounded-full"
            onClick={() => updateFilter("paneer")}
          />
        </div>
        <div className="p-3 mx-3">
          <img
            src="./menu/categoryCard/paratha.avif"
            alt=""
            className="rounded-full"
            onClick={() => updateFilter("paratha")}
          />
        </div>
        <div className="p-3 mx-3 rounded-full">
          <img
            src="./menu/categoryCard/pizza.avif"
            className="rounded-full"
            alt=""
            onClick={() => updateFilter("pizza")}
          />
        </div>
        <div className="p-3 mx-3 overflow-clip rounded-full">
          <img
            src="./menu/categoryCard/coffee.webp"
            alt=""
            className="rounded-full h-1/2"
            onClick={() => updateFilter("coffee")}
          />
        </div>
        <div className="p-3 mx-3">
          <img
            src="./menu/categoryCard/roll.avif"
            alt=""
            className="rounded-full"
            onClick={() => updateFilter("roll")}
          />
        </div>
        <div className="p-3 mx-3">
          <img
            src="./menu/categoryCard/thali.avif"
            alt=""
            className="rounded-full"
            onClick={() => updateFilter("thali")}
          />
        </div>
        */}
      </Slider>
    </div>
  );
}

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} bg-black rounded-full overflow-clip hover:bg-slate-600`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black rounded-full hover:bg-slate-600`}
      onClick={onClick}
    />
  );
}
