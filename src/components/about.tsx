import Image from "next/image";
export default function About() {
  return (
    <div className="flex items-center justify-evenly py-[84px] relative bg-background">
      <Image
        src="/aboutUs_excludeBg.png"
        fill={true}
        alt="background"
        className="opacity-10"
      />
      <div className="w-[50%] flex items-center justify-center ">
        <div className="py-2 px-2 bg-contain absolute bottom-16 rounded-xl bg-light bg-opacity-40 backdrop-blur-2xl shadow-2xl">
          <Image
            src="/aboutUs_coffee.svg"
            alt="coffee pic"
            height={497}
            width={359}
            className=""
          />
        </div>
      </div>
      <div className="w-[50%] flex flex-col items-start space-y-6">
        <p className="text-3xl font-poppins font-semibold">
          About
          <div className="flex-col items-center inline-flex pl-2">
            <p>us</p>
            <div className="rounded bg-primary min-h-[4px] w-full" />
          </div>
        </p>

        <p className="font-poppins font-semibold text-2xl">
          We provide quality coffee,
          <br /> and ready to deliver.
        </p>

        <p className="font-poppins text-light text-lg">
          We are a company that makes and distributes <br />
          delicious drinks. our main product is made with a <br /> secret recipe
          and available in stores worldwide.
        </p>
        <button className="text-chrome bg-secondary py-2 px-5 rounded-full font-poppins font-bold text-sm">
          Get your coffee
        </button>
      </div>
    </div>
  );
}
