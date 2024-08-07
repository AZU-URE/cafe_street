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

export interface CoffeeCardDetails {
  item: Item;
}

export type FilterState = {
  rating: number;
  priceRange: number[];
  category: string;
  type: boolean;
  cat_carousel: string;
};

export type CartItem = {
  item: Item;
  quantity: number;
};

export interface CartItemProviderType {
  cartItem: CartItem[];
  setCartItem: (item: CartItem[]) => void;
}

export type CafeFeature = {
  img: string;
  heading: string;
  desc: string;
};

export type CartContactUs = {
  name: string;
  email: string;
  message: string;
};

export type OnboardingFormType = {
  img: string;
  cafeName: string;
  name: string;
  contact: string | undefined;
  address1: string;
  address2: string;
  landmark: string;
  pincode: string | undefined;
  city: string;
  state: string;
};
