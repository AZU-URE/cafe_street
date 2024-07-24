"use client";
import { useCartItem } from "@/hooks/CartItemHook";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { CartItem } from "@/config/types";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Cart() {
  const { cartItem } = useCartItem();
  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);
  var total = 0;

  return (
    <div className="flex flex-grow items-start p-[5rem] bg-background space-x-10 ">
      <div className="flex flex-col space-y-10 w-[75%] h-full">
        {cartItem.length ? (
          cartItem.map((el) => (
            <CartItemRow item={el.item} quantity={el.quantity} />
          ))
        ) : (
          <p className="text-3xl font-bold w-full text-center">
            {" "}
            Cart Is Empty Go to{" "}
            <Link
              href={"/menu"}
              className="italic text-primary hover:underline"
            >
              Menu
            </Link>
          </p>
        )}
      </div>
      <div className="bg-feedbackCard/50 w-[25%] flex-col items-start justify-normal rounded-xl p-5">
        <p className="text-xl mb-3">Total Bill</p>
        <div className="flex flex-col items-center justify-normal space-y-3">
          {cartItem.length ? (
            cartItem.map((el) => {
              total += el.item.price * el.quantity;
              return (
                <div className="flex w-full items-center justify-between">
                  <p>{el.item.name}</p>
                  <p>
                    <span className="mr-1">₹</span>
                    {el.item.price * el.quantity}
                  </p>
                </div>
              );
            })
          ) : (
            <p>Nill</p>
          )}
          <hr className="border-[1px] border-dashed w-full border-secondary" />
          <p className="w-full text-right">
            <span className="mr-1">₹</span>
            {total}
          </p>
        </div>
        {cartItem.length ? (
          <button className="w-full mt-5 py-3 bg-primary rounded-xl font-bold text-white">
            Proceed to Pay
          </button>
        ) : null}
      </div>
    </div>
  );
}

function CartItemRow({ item, quantity }: CartItem) {
  const [currentQuant, setQuantity] = useState(quantity);
  const { updateStorageItem } = useCartItem();
  const add = () => {
    setQuantity(currentQuant + 1);
    const updatedQuantity = currentQuant + 1;
    updateStorageItem({ item: item, quantity: updatedQuantity });
  };
  const reduce = () => {
    setQuantity(currentQuant - 1);
    const updatedQuantity = currentQuant - 1;
    updateStorageItem({ item: item, quantity: updatedQuantity });
  };
  const remove = () => {
    updateStorageItem({ item: item, quantity: 0 });
  };
  return (
    <div className="rounded-xl bg-primary/5 backdrop-blur-sm backdrop-filter border-[1px] border-secondary p-4 flex items-start space-x-5 justify-start w-full h-[12rem]">
      <div className="h-[10rem] flex ">
        <img src={item.image} className="rounded-2xl object-cover"></img>
      </div>
      <div className="w-full h-full flex items-start justify-between ">
        <div className="flex items-start h-full flex-col space-y-2">
          <Link
            href={{
              pathname: `/menu/${item.name}`,
              query: { item: JSON.stringify(item) },
            }}
            className="font-semibold text-lg underline"
          >
            {item.name}
          </Link>
          <p className="font-light">{item.description.substring(0, 50)}...</p>
          <p>
            Price:
            <span className="mx-1">₹</span>
            <span className="">{item.price}</span>
          </p>
          <div className="flex items-center justify-center">
            <p className="mr-2 font-bold text-lg">Quantity</p>
            <div
              className={` self-center items-center justify-around rounded-lg bg-primary/10 flex`}
            >
              <button
                className=" text-white font-bold text-base w-full rounded-l-xl bg-primary hover:bg-primary/80 p-1 px-3"
                onClick={reduce}
              >
                -
              </button>
              <p className=" w-full text-center  text-base px-5">{quantity}</p>
              <button
                className=" text-base font-bold text-white w-full rounded-r-xl bg-primary hover:bg-primary/80 p-1 px-3"
                onClick={add}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end h-full justify-between">
          <RemoveCircleIcon
            className="text-red-600 text-3xl cursor-pointer"
            onClick={remove}
          />

          <p className="place-self-end font-semibold">
            Total:
            <span className="mx-1 italic">₹</span>
            <span className="italic">{item.price * currentQuant}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
