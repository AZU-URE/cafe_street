import Image from "next/image";
import { CoffeeCardDetails } from "@/config/types";
import { useCartItem } from "@/hooks/CartItemHook";
import { useState, useEffect } from "react";
export default function CoffeeCard({ item }: CoffeeCardDetails) {
  const { updateStorageItem, cartItem, fetchStorageItem } = useCartItem();
  const [quantity, setQuantity] = useState(0);
  const add = () => {
    setQuantity(quantity + 1);
    const updatedQuantity = quantity + 1;
    updateStorageItem({ item: item, quantity: updatedQuantity });
  };
  const reduce = () => {
    setQuantity(quantity - 1);
    const updatedQuantity = quantity - 1;
    updateStorageItem({ item: item, quantity: updatedQuantity });
  };
  const clickCart = () => {
    updateStorageItem({ item: item, quantity: 1 });
    setQuantity(1);
  };

  useEffect(() => {
    const currentItem: any = cartItem.filter((el) => el.item.id === item?.id);
    setQuantity(currentItem[0]?.quantity);
  }, [cartItem]);
  return (
    <div className="bg-feedbackCardBorder/60 hover:bg-feedbackCard/90 p-6 rounded-lg hover:shadow-2xl hover:shadow-gray-600 hover:scale-105">
      <div className="flex items-center justify-center mb-5">
        <img
          src={`${item?.image}`}
          height={226}
          width={307}
          alt="item1"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <p className="font-semibold font-poppins lg:text-2xl md:text-xl text-base text-secondary">
            {item?.name}
          </p>
          <p className="font-bold font-poppins lg:text-2xl md:text-xl text-base text-secondary">
            <span className="pr-1">₹</span>
            {item?.price}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="w-[146px] font-semibold font-poppins md:text-sm text-xs text-light">
            {item?.description.substring(0, 30)}...
          </p>
          <div
            className={`bg-primary h-[43px] w-[43px] p-1 rounded-full items-center justify-center ${
              quantity > 0 ? "hidden" : "flex"
            } `}
            onClick={clickCart}
          >
            <Image src={`/cart_hero.svg`} width={18} height={17} alt="cart" />
          </div>
          <div
            className={`${
              quantity > 0 ? "flex" : "hidden"
            } w-[40%] self-center items-center justify-around rounded-xl  bg-primary/10`}
          >
            <button
              className=" text-primary font-bold text-xl w-full rounded-l-xl bg-primary/20 hover:bg-secondary/80"
              onClick={reduce}
            >
              -
            </button>
            <p className="text-base w-full text-center  ">{quantity}</p>
            <button
              className=" text-xl font-bold text-primary w-full rounded-r-xl bg-primary/20 hover:bg-secondary/80"
              onClick={add}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
