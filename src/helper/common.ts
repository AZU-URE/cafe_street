import { FilterState, Item } from "@/config/types";
export function ApplyFilter(Itemslist: Item[], filter: FilterState) {
  const updatedList = Itemslist.filter((el: Item) => {
    var catConditions = true;
    var catCarouselConditions = true;
    if (filter.category != "all") {
      catConditions = el.category === filter.category;
    }
    if (filter.cat_carousel != "all") {
      catCarouselConditions = el.category_carousel === filter.cat_carousel;
    }
    var NonVegCond = true;
    if (filter?.type) {
      NonVegCond = el.veg == filter.type;
    }

    // console.log(priceCond, ratingCond, vegCond, catConditions);
    // console.log(filter.priceRange[0], filter.priceRange[1]);

    return (
      el.price / 10 >= filter.priceRange[0] &&
      el.price / 10 <= filter.priceRange[1] &&
      catConditions &&
      catCarouselConditions &&
      el.rating >= filter.rating &&
      NonVegCond
    );
  });
  return updatedList;
}
