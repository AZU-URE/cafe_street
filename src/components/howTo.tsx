import Image from "next/image";
export default function HowTo() {
  return (
    <div className="flex flex-col my-52">
      <p className="text-4xl font-poppins font-semibold pl-52">
        How to use delivery
        <div className="flex-col items-center inline-flex pl-2">
          <p>service</p>
          <div className="rounded bg-primary min-h-[4px] w-full" />
        </div>
      </p>
      <div className="flex justify-evenly items-center mt-10">
        <div className="flex flex-col items-center justify-evenly">
          <div className="relative min-w-[159px] min-h-[159px] mb-10">
            <Image
              src="/howTo_tap.svg"
              alt="howTo_1"
              width={79}
              height={81}
              className="absolute -bottom-0 -right-0"
            />
            <Image
              src="/howTo_cup1.svg"
              alt="howTo_1"
              width={131}
              height={135}
            />
          </div>
          <p className="text-2xl font-semibold font-poppins text-secondary">
            choose your coffee
          </p>
          <p className="text-lg font-poppins">there are 20+ coffees for you</p>
        </div>
        <div className="flex flex-col items-center justify-evenly">
          <Image
            src="/howTo_foodTruck.svg"
            alt="howTo_1"
            width={159}
            height={159}
            className="mb-10"
          />

          <p className="text-2xl font-semibold font-poppins text-secondary">
            we delivery it to you
          </p>
          <p className="flex flex-col items-center justify-evenly">
            Choose delivery service
          </p>
        </div>
        <div className="flex flex-col items-center justify-evenly">
          <Image
            src="/howTo_cup2.svg"
            alt="howTo_1"
            width={159}
            height={159}
            className="mb-10"
          />

          <p className="text-2xl font-semibold font-poppins text-secondary">
            Enjoy your coffee
          </p>
          <p className="flex flex-col items-center justify-evenly">
            Choose delivery service
          </p>
        </div>
      </div>
    </div>
  );
}
