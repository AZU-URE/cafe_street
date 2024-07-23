"use client";
import { useSearchParams } from "next/navigation";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EastIcon from "@mui/icons-material/East";
import { useCartItem } from "@/hooks/CartItemHook";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function MenuItem() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { cartItem, updateStorageItem } = useCartItem();
  const item = JSON.parse(searchParams.get("item") || "");
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
  console.log(item);
  useEffect(() => {
    const id = item.id;
    if (id != null) {
      const item = cartItem.filter((el) => el.item.id === parseInt(id));
      if (item.length != 0) setQuantity(item[0]?.quantity);
    }
  }, [cartItem]);

  return (
    <div className=" px-[10rem] bg-background flex flex-grow items-start py-[5rem] justify-center space-x-[7rem] h-full w-full">
      <div className="flex items-center justify-center p-1 border-2 border-primary rounded-lg h-full">
        <img src={item?.image} className="w-[75rem] rounded-lg"></img>
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-1">{item?.name}</h1>
        <p className="flex items-center w-fit justify-center border-[1px] rounded-lg p-1 border-primary">
          <span>Rating: {item?.rating}</span>
          <StarIcon className="text-primary ml-1" />
        </p>
        <hr className="border-[1px] border-feedbackCard my-5" />
        <p className="text-2xl font-bold">
          MRP <span className="pr-1">₹</span>
          {item?.price}
        </p>
        <p className="font-bold text-sm text-primary mb-5">
          inclusive of all taxes
        </p>
        <p>{item?.description}</p>
        <div className="flex items-center space-x-[2rem]">
          {quantity ? (
            <div
              className={` w-[50%] self-center items-center justify-around rounded-lg mt-[2rem]  bg-primary/10 flex`}
            >
              <button
                className=" text-white font-bold text-xl w-full rounded-l-xl bg-primary hover:bg-primary/80 p-[0.5rem]"
                onClick={reduce}
              >
                -
              </button>
              <p className=" w-full text-center  text-xl">{quantity}</p>
              <button
                className=" text-xl font-bold text-white w-full rounded-r-xl bg-primary hover:bg-primary/80 p-[0.5rem]"
                onClick={add}
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={clickCart}
              className="bg-primary hover:bg-primary/80 flex items-center justify-center text-white font-semibold text-lg w-[50%] p-[0.5rem] rounded-lg mt-[2rem]"
            >
              <ShoppingCartIcon className="mr-3" /> <span>Add to Cart</span>
            </button>
          )}
          <button
            className="bg-transparent border-2 border-primary hover:bg-primary/80 flex items-center justify-center text-secondary font-semibold text-lg w-[50%] p-[0.4rem] rounded-lg mt-[2rem] group"
            onClick={() => router.push("/menu/cart")}
          >
            {" "}
            <span className="group-hover:translate-x-1">Go to Cart</span>
            <EastIcon className="ml-3 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
