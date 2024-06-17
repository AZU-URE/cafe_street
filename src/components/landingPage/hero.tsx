import Image from "next/image";
export default function Hero() {
  return (
    <div className="max-w-full min-h-fit min-w-screen bg-background flex items-center justify-center pb-10 lg:flex-row flex-col-reverse">
      <div className="lg:mt-40 mt-40 md:mt-0 relative w-full ">
        <div className="flex flex-col lg:items-start items-center justify-around space-y-10 mb-16 lg:pl-52 lg:text-left text-center w-full">
          <h1 className="md:text-5xl text-4xl font-poppins font-semibold text-secondary ">
            Enjoy your <span className="text-primary">coffee</span>
            <br /> before your activity
          </h1>
          <p className="lg:text-lg text-base font-poppins text-light ">
            Boost your productivity and build your
            <br /> mood with a glass of coffee in the morning
          </p>
          <div className="flex space-x-5 items-center">
            <button className="font-bold font-poppins text-white bg-secondary rounded-full p-3 px-5 flex items-center justify-center text-sm">
              Order now
              <img
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
        <img src="/beans_bg.svg" alt="beans image" className="lg:flex hidden" />
      </div>
      <div className="lg:-mt-16 lg:pr-52 md:flex hidden w-full lg:scale-100 scale-[0.65] md:mt-5">
        <div className="bg-secondary rounded-full lg:h-[28rem] lg:w-[28rem] md:h-[23rem] md:w-[23rem] flex flex-col items-center justify-center z-10 relative ">
          <img
            className="absolute"
            src="/Exclude_coffee_mug_hero.png"
            alt="exclude"
          />
          <div className="py-2 px-2 bg-white bg-opacity-20 backdrop-blur-2xl bg-contain absolute top-14 -left-20 rounded-full">
            <p className="bg-white text-3xl text-secondary font-semibold font-poppins py-2 px-12 rounded-full ">
              Cappuccino
            </p>
          </div>

          <img
            src="/coffee_mug_hero.png"
            alt="coffee mug"
            className="relative"
          />
          <div className="py-2 px-2 bg-white bg-opacity-20 backdrop-blur-2xl bg-contain absolute top-28 -right-10 rounded-full">
            <p className="bg-white text-3xl text-secondary font-semibold font-poppins py-2 px-8 rounded-full flex">
              4.8
              <img src="/star_hero.svg" alt="star" className="ml-1.5" />
            </p>
          </div>
          <div className="py-2 px-2 bg-white bg-opacity-20 backdrop-blur-2xl bg-contain absolute left-0 bottom-5 rounded-full">
            <p className="bg-white text-3xl text-secondary font-semibold font-poppins py-2 px-12 rounded-full  right-0">
              18k
            </p>
          </div>
        </div>
        <img
          src="/beans_bg.svg"
          alt="beans image"
          className="top-0 absolute right-0"
        />
      </div>
    </div>
  );
}
