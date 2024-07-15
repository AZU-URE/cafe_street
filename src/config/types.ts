export type Item = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  veg: boolean;
  category: string;
  category_carousel: string;
};

export interface Ifilter {
  setList: (list: Item[]) => void;
  Itemslist: Item[];
  filter: FilterState;
  setFilter: (filter: any) => void;
}

export type CoffeeCardDetails = {
  name: string;
  price: number;
  detail: string;
  pic: string;
};

export type FilterState = {
  rating: number;
  priceRange: number[];
  category: string;
  type: boolean;
  cat_carousel: string;
};
