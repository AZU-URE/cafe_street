import Image from "next/image";

type details = {
  name: string;
  price: string;
  detail: string;
  pic: number;
};
export default function CoffeeCard({ name, price, detail, pic }: details) {
  return (
    <div className=" p-6 rounded-lg shadow-2xl shadow-gray-600">
      <div className="flex items-center justify-center mb-5">
        <Image
          src={`/${pic}`}
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
            {price}
            <span className="pl-1">K</span>
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
