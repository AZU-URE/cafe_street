"use client";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Switch, Button } from "@mui/material";
export default function Filter() {
  type Filter = {
    rating: number;
    priceRange: [number, number];
    category: string | null;
    type: boolean;
  };

  // type : veg/non-veg
  const [filter, setFilter] = useState<Filter>({
    rating: -1,
    priceRange: [-1, -1],
    category: null,
    type: true,
  });

  const changeType = () => {
    // console.log(hii)
    setFilter((prev) => ({
      rating: prev.rating,
      priceRange: prev.priceRange,
      category: prev.category,
      type: !prev.type,
    }));
  };

  const clear = () => {
    setFilter((prev) => ({
      rating: -1,
      priceRange: [-1, -1],
      category: null,
      type: true,
    }));
  };
  return (
    <div className="flex items-center justify-around flex-col space-y-5">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <Switch
            inputProps={{ "aria-label": "type" }}
            onChange={changeType}
            checked={filter.type}
            color="warning"
          />
          <h6>{filter.type ? "Veg" : "Non-Veg"}</h6>
        </div>
        <Button
          variant="contained"
          className="bg-primary shadow-md hover:bg-feedbackCard hover:text-secondary"
          onClick={clear}
        >
          Clear
        </Button>
      </div>
      <Accordion className="bg-background">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className=" text-secondary/90 font-medium text-lg">
            Rating
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-background">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className=" text-secondary/90 font-medium text-lg">
            Price Range
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-background">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className=" text-secondary/90 font-medium text-lg">
            Category
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
