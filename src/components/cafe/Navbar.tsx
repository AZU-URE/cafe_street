"use client";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="w-full fixed flex items-center justify-between bg-red-500/40 top-0 backdrop-blur-[8px] backdrop-filter md:px-[2rem] px-[1rem] py-[1.5rem] z-10">
      <img
        src="/logo_coffe.svg"
        className="bg-secondary/20 p-1 rounded-md md:scale-100 scale-75"
      ></img>
      <div className="flex items-center justify-center md:space-x-[1rem] space-x-[0.5rem]">
        <button
          onClick={() => router.push("/cafeSignin")}
          className="px-[1.5rem] py-2 bg-blue-700 rounded-lg text-white font-bold hover:bg-blue-800 md:text-base text-xs"
        >
          Access Menu
        </button>
      </div>
    </nav>
  );
}
