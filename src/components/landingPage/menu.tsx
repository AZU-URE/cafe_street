import details from "@/config/items.json";
// ("use client");
import CoffeeCard from "./coffeeCard";
export default function Menu() {
  // const items = props.items;
  // console.log(items);
  const items = details.items;

  return (
    <div className="py-32 px-52">
      <div className="text-3xl font-poppins font-semibold mb-8">
        Special menu
        <div className="flex-col items-center inline-flex pl-2">
          <p>for you</p>
          <div className="rounded bg-primary min-h-[4px] w-full"></div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-16">
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
