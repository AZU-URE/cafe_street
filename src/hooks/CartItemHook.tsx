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
    const item = localStorage.getItem("cartItem");
    if (item) {
      const found = cartItem.some((el) => {
        if (menuItem.item.id === el.item.id) {
          el.quantity = menuItem.quantity;
          const filteredCart = cartItem.filter((el) => el.quantity > 0);
          setCartItem(filteredCart);
          // console.log(cartItem);
          localStorage.setItem("cartItem", JSON.stringify(filteredCart));
          return true;
        } else return false;
      });
      // console.log("2", cartItem);
      if (!found) {
        // console.log("in not found");
        setCartItem([...cartItem, menuItem]);
        localStorage.setItem(
          "cartItem",
          JSON.stringify([...cartItem, menuItem])
        );
      }
    } else {
      setCartItem([menuItem]);
      localStorage.setItem("cartItem", JSON.stringify([menuItem]));
    }
  };
  const fetchStorageItem = () => {
    const item = JSON.parse(localStorage.getItem("cartItem") || "{}");
    setCartItem(item);
  };
  return { cartItem, updateStorageItem, fetchStorageItem };
}
