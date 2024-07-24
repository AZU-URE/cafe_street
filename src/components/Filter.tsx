"use client";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Switch, Button } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Slider from "@mui/material/Slider";
import { Ifilter, Item, FilterState } from "@/config/types";
import { ApplyFilter } from "@/helper/common";

export default function Filter({
  setList,
  Itemslist,
  filter,
  setFilter,
}: Ifilter) {
  // type : veg/non-veg

  const clear = () => {
    setFilter({
      rating: 1,
      priceRange: [0, 100],
      category: "all",
      type: false,
      cat_carousel: "all",
    });
    setList(Itemslist);
  };
  function priceSliderLabel(value: number) {
    const v = value * 10;
    return `₹ ${v}`;
  }
  useEffect(() => {
    apply();
  }, [Itemslist]);

  const apply = () => {
    var updatedList = ApplyFilter(Itemslist, filter);
    // console.log(updatedList);
    setList(updatedList);
  };
  return (
    <div className="flex items-center justify-around flex-col lg:space-y-5 space-y-3 w-full py-5 lg:py-0">
      <div className="flex items-center space-x-3 justify-end w-full">
        <div className="flex lg:hidden items-center justify-between w-full">
          <div className="flex items-center">
            <Switch
              inputProps={{ "aria-label": "type" }}
              onChange={(e) =>
                setFilter((prev: FilterState) => ({
                  ...prev,
                  type: !prev.type,
                }))
              }
              checked={filter.type}
              color="warning"
            />
            <h6 className="lg:text-base text-xs">
              Veg-Mode{" "}
              <span className="font-bold">{filter.type ? "ON" : "OFF"}</span>
            </h6>
          </div>
        </div>
        <Button
          variant="contained"
          className="bg-primary shadow-md hover:bg-feedbackCard hover:text-secondary lg:text-base text-xs"
          onClick={clear}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          className="bg-secondary/80 shadow-md hover:bg-feedbackCard hover:text-secondary lg:text-base text-xs"
          onClick={apply}
        >
          Apply
        </Button>
      </div>
      <Accordion className="bg-background w-full">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className=" text-secondary/90 font-medium lg:text-lg text-base">
            Rating
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={filter.rating}
            onChange={(e) =>
              setFilter((prev: any) => ({
                ...prev,
                rating: parseInt(e.target.value),
              }))
            }
          >
            <FormControlLabel value="5" control={<Radio />} label="5 Star" />
            <FormControlLabel value="4" control={<Radio />} label="4+ Star" />
            <FormControlLabel value="3" control={<Radio />} label="3+ Star" />
            <FormControlLabel value="2" control={<Radio />} label="2+ Star" />
            <FormControlLabel value="1" control={<Radio />} label="1+ Star" />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-background w-full items-center justify-center">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className=" text-secondary/90 font-medium lg:text-lg text-base">
            Price Range
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={filter.priceRange}
              onChange={(e: any) => {
                // console.log(e.target.value);

                setFilter((prev: any) => ({
                  ...prev,
                  priceRange: e.target.value,
                }));
              }}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => priceSliderLabel(value)}
              // getAriaValueText={priceSliderLabel}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-background w-full">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className=" text-secondary/90 font-medium lg:text-lg text-base">
            Category
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={filter.category}
            onChange={(e) =>
              setFilter((prev: any) => ({
                ...prev,
                category: e.target.value,
              }))
            }
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value="snack" control={<Radio />} label="Snack" />
            <FormControlLabel
              value="cold beverage"
              control={<Radio />}
              label="Cold Beverage"
            />
            <FormControlLabel
              value="hot beverage"
              control={<Radio />}
              label="Hot Beverage"
            />
            <FormControlLabel
              value="main course"
              control={<Radio />}
              label="Main Course"
            />
            <FormControlLabel
              value="starter"
              control={<Radio />}
              label="Starter"
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
