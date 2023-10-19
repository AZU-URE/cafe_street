import Image from "next/image";
import newletter from "./newsletter.svg";
export default function Newsletter() {
  return (
    <div className=" px-52 py-32 w-full h-[500] relative flex items-center justify-center">
      <Image
        width={1170}
        height={392}
        src="/newsletter.svg"
        alt="newseletter"
      />
      <div className="absolute flex flex-col">
        <p className="text-white font-semibold font-poppins text-3xl">
          Subscribe to get 50% discount price
        </p>
        <div className="mx-10 mt-10 flex items-center relative ">
          <input
            type="text"
            className="w-full rounded-full p-4 font-poppins font-semibold"
            placeholder="Email address"
          />
          <button className="px-5 absolute p-2 top-2 right-12 -mr-10 rounded-full bg-secondary text-white font-semibold flex items-center justify-center">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
