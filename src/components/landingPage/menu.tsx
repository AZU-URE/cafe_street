import details from "@/config/items.json";
// ("use client");
import CoffeeCard from "./coffeeCard";
export default function Menu() {
  // const items = props.items;
  // console.log(items);
  const items = details.items;

  return (
    <div className="lg:py-32 py-[3rem] md:px-[3rem] px-[1rem] lg:px-52 w-full">
      <div className="text-3xl font-poppins font-semibold mb-8 text-center">
        Special menu
        <div className="flex-col items-center inline-flex pl-2">
          <p>for you</p>
          <div className="rounded bg-primary min-h-[4px] w-full"></div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-16 md:gap-4 gap-2">
        {items?.map((item: any) => (
          <CoffeeCard
            key={item.id}
            name={item.name}
            pic={item.pic}
            detail={item.detail}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
