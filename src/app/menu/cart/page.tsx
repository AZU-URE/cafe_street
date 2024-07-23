"use client";
import { useCartItem } from "@/hooks/CartItemHook";
export default function Cart() {
  const { cartItem } = useCartItem();
  return (
    <div className="flex flex-grow items-center p-[5rem] bg-background space-x-10">
      <div className="flex items-center justify-start flex-col space-y-10 w-full">
        {cartItem.map((el) => (
          <div className="rounded-xl bg-primary/5 backdrop-blur-sm backdrop-filter border-[1px] border-secondary p-4 flex items-center justify-between w-full">
            <img src={el.item.image} className="w-[15%] rounded-xl"></img>
          </div>
        ))}
      </div>
    </div>
  );
}
