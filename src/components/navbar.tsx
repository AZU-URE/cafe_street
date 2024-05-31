import { url } from "inspector";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/client";
import { useEffect } from "react";
export default function Navbar() {
  const supabase = createClient();

  useEffect(() => {
    async function getUser() {
      console.log("user from navbar");

      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user);
    }
    getUser();
  }, []);

  const router = useRouter();
  return (
    <nav className=" flex items-center justify-evenly bg-transparent absolute p-6 w-full z-10">
      <Image src="/logo_coffe.svg" alt="logo" height={30} width={150} />
      <ul className="flex items-center space-x-5 font-poppins">
        <li className="text-primary tracking-wide">About us</li>
        <li className="tracking-wide">Our Product</li>
        <li className="tracking-wide">Delivery</li>
      </ul>
      <div className="flex items-center space-x-6">
        <form>
          <input
            type="search"
            placeholder="Cappuccino"
            className="rounded-full p-1 bg-no-repeat pl-10 bg-[center_left_10px] shadow-lg  "
            style={{ backgroundImage: `url(/search.svg)` }}
          />
        </form>
        <Image
          src="/cart.svg"
          alt="cart"
          height={32}
          width={32}
          className="hover:cursor-pointer"
        />
        <button
          onClick={() => router.push("./signin")}
          className=" font-poppins tracking-wide text-white bg-secondary rounded-full p-2 px-5 flex items-center justify-center"
        >
          SignIn
        </button>
      </div>
    </nav>
  );
}

// {user ? (
//   <Image
//     src="/profile.png"
//     alt="avatar"
//     height={32}
//     width={32}
//     style={{ backgroundColor: "rgb(255,144,43)", borderRadius: "100%" }}
//     className="hover:cursor-pointer "
//   />
// ) : user ? (
//   <button>Sign out</button>
// ) : (
//   <button
//     onClick={clickSignin}
//     className="font-poppins tracking-wide text-white bg-secondary rounded-full p-2 px-5 flex items-center justify-center"
//   >
//     Connect
//   </button>
// )}
