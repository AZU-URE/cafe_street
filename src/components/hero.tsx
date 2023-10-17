import Image from "next/image";
export default function Hero() {
  return (
    <div className="min-h-fit min-w-screen bg-background flex items-center justify-between">
      <div className="mt-40 ">
        <div className="flex flex-col items-start justify-around space-y-10 mb-16 pl-52">
          <h1 className="text-5xl font-poppins font-semibold text-secondary">
            Enjoy your <span className="text-primary">coffee</span>
            <br /> before your activity
          </h1>
          <p className="text-lg font-poppins text-light">
            Boost your productivity and build your
            <br /> mood with a glass of coffee in the morning
          </p>
          <div className="flex space-x-5 items-center">
            <button className="font-bold font-poppins text-white bg-secondary rounded-full p-3 px-5 flex items-center justify-center text-sm">
              Order now
              <Image
                src="/cart_hero.svg"
                alt="cart"
                height={22}
                width={22}
                className="bg-primary p-1 mx-2 rounded-full "
              />
            </button>
            <button className="text-primary text-sm font-bold border-2 border-primary rounded-full p-2 px-7">
              More menu
            </button>
          </div>
        </div>
        <Image
          src="/beans_bg.svg"
          alt="beans image"
          width={569}
          height={394}
          className=""
        />
      </div>
      <div className="flex -mt-16 pr-52">
        <div className="bg-secondary rounded-full h-[434px] w-[434px] flex flex-col items-center justify-center z-10 relative">
          <Image
            className="absolute"
            src="/Exclude_coffee_mug_hero.png"
            alt="exclude"
            height={434}
            width={434}
          />
          <div className="py-2 px-2 bg-white bg-opacity-20 backdrop-blur-2xl bg-contain absolute top-14 -left-20 rounded-full">
            <p className="bg-white text-3xl text-secondary font-semibold font-poppins py-2 px-12 rounded-full ">
              Cappuccino
            </p>
          </div>

          <Image
            src="/coffee_mug_hero.png"
            alt="coffee mug"
            height={350}
            width={350}
            className="relative"
          />
          <div className="py-2 px-2 bg-white bg-opacity-20 backdrop-blur-2xl bg-contain absolute top-28 -right-10 rounded-full">
            <p className="bg-white text-3xl text-secondary font-semibold font-poppins py-2 px-8 rounded-full flex">
              4.8
              <Image
                src="/star_hero.svg"
                height={24}
                width={24}
                alt="star"
                className="ml-1.5"
              />
            </p>
          </div>
          <div className="py-2 px-2 bg-white bg-opacity-20 backdrop-blur-2xl bg-contain absolute left-0 bottom-5 rounded-full">
            <p className="bg-white text-3xl text-secondary font-semibold font-poppins py-2 px-12 rounded-full  right-0">
              18k
            </p>
          </div>
        </div>
        <Image
          src="/beans_bg.svg"
          alt="beans image"
          width={599}
          height={394}
          className="top-0 absolute right-0"
        />
      </div>
    </div>
  );
}
