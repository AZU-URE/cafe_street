export default function HowTo() {
  return (
    <div className="flex flex-col lg:my-52 my-[3rem] max-w-full">
      <div className="text-3xl font-poppins font-semibold text-center mb-[2rem]">
        How to use delivery
        <div className="flex-col items-center inline-flex pl-2">
          <p>service</p>
          <div className="rounded bg-primary min-h-[4px] w-full"></div>
        </div>
      </div>
      <div className="flex md:flex-row md:space-y-0 space-y-10 md:space-x-10 space-x-0 flex-col justify-evenly items-center mt-10">
        <div className="flex flex-col items-center justify-evenly">
          <div className="relative min-w-[159px] min-h-[159px] mb-10">
            <img
              src="/howTo_tap.svg"
              alt="howTo_1"
              className="absolute -bottom-0 -right-0"
            />
            <img src="/howTo_cup1.svg" alt="howTo_1" className="" />
          </div>
          <p className="lg:text-2xl text-xl font-semibold font-poppins text-secondary">
            Choose your coffee
          </p>
          <p className="lg:text-lg text-base font-poppins">
            There are 20+ coffees for you
          </p>
        </div>
        <div className="flex flex-col items-center justify-evenly">
          <img src="/howTo_foodTruck.svg" alt="howTo_1" className="mb-10" />

          <p className="lg:text-2xl text-xl font-semibold font-poppins text-secondary">
            we delivery it to you
          </p>
          <p className="lg:text-lg text-base flex flex-col items-center justify-evenly">
            Choose delivery service
          </p>
        </div>
        <div className="flex flex-col items-center justify-evenly">
          <img src="/howTo_cup2.svg" alt="howTo_1" className="mb-10" />

          <p className="lg:text-2xl text-xl font-semibold font-poppins text-secondary">
            Enjoy your coffee
          </p>
          <p className="lg:text-lg text-base flex flex-col items-center justify-evenly">
            Choose delivery service
          </p>
        </div>
      </div>
    </div>
  );
}
