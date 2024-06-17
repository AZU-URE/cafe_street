export default function About() {
  return (
    <div
      className="flex items-center justify-evenly py-[84px] relative bg-background lg:pl-32 p-[3rem] bg-blend-overlay"
      style={{ backgroundImage: `url(/aboutUs_excludeBg.svg)` }}
    >
      <div className="w-[50%] md:flex items-center lg:justify-center md:justify-evenly hidden lg:mr-0 mr-[4rem]">
        <div className="py-2 px-2 bg-contain lg:absolute lg:bottom-[4rem] rounded-xl bg-light bg-opacity-40 backdrop-blur-2xl shadow-2xl">
          <img src="/aboutUs_coffee.svg" alt="coffee pic" className="" />
        </div>
      </div>
      <div className="md:w-[50%] w-full flex flex-col items-start space-y-6 text-center md:text-left">
        <div className="text-3xl font-poppins font-semibold  w-full">
          About
          <div className="flex-col items-center inline-flex pl-2">
            <p>us</p>
            <div className="rounded bg-primary min-h-[4px] w-full"></div>
          </div>
        </div>

        <p className="font-poppins font-semibold text-2xl">
          We provide quality coffee,
          <br className="md:flex hidden" /> and ready to deliver.
        </p>

        <p className="font-poppins text-light text-lg">
          We are a company that makes and distributes{" "}
          <br className="md:flex hidden" />
          delicious drinks. our main product is made with a{" "}
          <br className="md:flex hidden" /> secret recipe and available in
          stores worldwide.
        </p>
        <button className="text-chrome bg-secondary py-3 px-5 rounded-full font-poppins font-bold text-sm md:w-fit w-full">
          Get your coffee
        </button>
      </div>
    </div>
  );
}
