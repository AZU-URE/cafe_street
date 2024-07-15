import Image from "next/image";
import { CoffeeCardDetails } from "@/config/types";
export default function CoffeeCard({
  name,
  price,
  detail,
  pic,
}: CoffeeCardDetails) {
  return (
    <div className="bg-feedbackCardBorder/60 hover:bg-feedbackCard/90 p-6 rounded-lg hover:shadow-2xl hover:shadow-gray-600 hover:scale-105">
      <div className="flex items-center justify-center mb-5">
        <Image
          src={`${pic}`}
          height={226}
          width={307}
          alt="item1"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <p className="font-semibold font-poppins lg:text-2xl md:text-xl text-base text-secondary">
            {name}
          </p>
          <p className="font-bold font-poppins lg:text-2xl md:text-xl text-base text-secondary">
            <span className="pr-1">₹</span>
            {price}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="w-[146px] font-semibold font-poppins md:text-sm text-xs text-light">
            {detail}
          </p>
          <div className="bg-primary h-[43px] w-[43px] p-1 rounded-full flex items-center justify-center ">
            <Image src={`/cart_hero.svg`} width={18} height={17} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
}
