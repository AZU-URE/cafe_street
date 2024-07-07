"use client";
import { url } from "inspector";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/client";
import { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { Menu, MenuItem, Avatar } from "@mui/material";

export default function Navbar() {
  const router = useRouter();
  const supabase = createClient();
  const [user, setUser] = useState(false);
  const [menu, setOpenMenu] = useState(false);
  // console.log(window.location.origin);

  async function getUser() {
    console.log("user from navbar");
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      console.log(user);
      setUser(true);
    } else {
      setUser(false);
    }
  }
  useEffect(() => {
    getUser();
  }, []);

  const openMenu = () => {
    setOpenMenu(true);
  };

  const signout = async () => {
    console.log("clicked");
    const { error } = await supabase.auth.signOut({ scope: "local" });
    error && console.log(error);
    getUser();
    router.push("/");
  };

  return (
    <nav className=" bg-background/50 h-fit flex items-center md:justify-evenly justify-between absolute p-6 w-full z-10">
      <Image src="/logo_coffe.svg" alt="logo" height={30} width={150} />
      <ul className="md:flex items-center space-x-5 font-poppins hidden lg:text-base text-sm">
        <li className="text-primary tracking-wide">About us</li>
        <li className="tracking-wide">Our Product</li>
        <li className="tracking-wide">Delivery</li>
      </ul>
      <div className="flex items-center justify-end">
        <div className="md:hidden">
          <MenuIcon sx={{ color: "#2F2105" }} />
        </div>
        <div className="flex items-center space-x-6">
          {user ? (
            <div className="flex items-center space-x-6">
              <img
                src="/cart.svg"
                alt="cart"
                height={32}
                width={32}
                className="hover:cursor-pointer"
                onClick={() => router.push("/menu/cart")}
              />
              <Avatar
                src="/profile.png"
                sx={{ width: 32, height: 32 }}
                onClick={() => router.push("/menu")}
                className="cursor-pointer"
              ></Avatar>
              <div
                className="bg-primary p-2 cursor-pointer rounded-full flex items-center text-white"
                style={{ width: 32, height: 32 }}
                onClick={signout}
              >
                <LogoutIcon sx={{ width: 20, height: 20 }} />
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-6">
              <button
                onClick={() => router.push("./signin")}
                className="lg:text-base text-sm font-poppins tracking-wide text-white bg-secondary rounded-full p-2 px-5 md:flex hidden items-center justify-center"
              >
                SignIn
              </button>
              <button
                onClick={() => router.push("./signup")}
                className="lg:text-base text-sm font-poppins font-bold tracking-wide text-secondary bg-primary rounded-full p-2 px-5 md:flex hidden items-center justify-center"
              >
                SignUp
              </button>
            </div>
          )}
        </div>
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

{
  /* <form> */
}
{
  /* <input
            type="search"
            placeholder="Cappuccino"
            className="rounded-full p-1 bg-no-repeat pl-10 bg-[center_left_10px] shadow-lg  "
            style={{ backgroundImage: `url(/search.svg)` }}
            /> */
}
// </form>;
