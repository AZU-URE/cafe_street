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
}
