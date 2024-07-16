"use client";
import { useState, useContext, createContext } from "react";
import { CartItem, CartItemProviderType } from "@/config/types";

const cartItemContext = createContext<CartItemProviderType>(null!);
export function CartItemProvider({ children }: any) {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);
  return (
    <cartItemContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </cartItemContext.Provider>
  );
}

export function useCartItem() {
  const { cartItem, setCartItem } = useContext(cartItemContext);
  const updateStorageItem = (menuItem: CartItem) => {
    // console.log("1", cartItem);

    const found = cartItem.some((el) => {
      if (menuItem.item.id === el.item.id) {
        if (menuItem.quantity > 0) {
          el.quantity = menuItem.quantity;
        } else {
          var index = cartItem.indexOf(el);
          cartItem.splice(index, 1);
        }

        localStorage.setItem("cartItem", JSON.stringify(cartItem));
        return true;
      } else return false;
    });
    // console.log("2", cartItem);
    if (!found) {
      // console.log("in not found");
      setCartItem([...cartItem, menuItem]);
      localStorage.setItem("cartItem", JSON.stringify([...cartItem, menuItem]));
    }
  };
  const fetchStorageItem = () => {
    const item = JSON.parse(localStorage.getItem("cartItem") || "");
    setCartItem(item);
  };
  return { cartItem, updateStorageItem, fetchStorageItem };
}
