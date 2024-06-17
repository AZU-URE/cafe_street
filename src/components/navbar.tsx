import { url } from "inspector";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/client";
import { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";
export default function Navbar() {
  const supabase = createClient();
  const [user, setUser] = useState(false);
  const [menu, setOpenMenu] = useState(false);

  useEffect(() => {
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
    getUser();
  }, []);

  const openMenu = () => {
    setOpenMenu(true);
  };

  const router = useRouter();
  return (
    <nav className=" flex items-center md:justify-evenly justify-between bg-transparent absolute p-6 w-full z-10">
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
          <form>
            {/* <input
            type="search"
            placeholder="Cappuccino"
            className="rounded-full p-1 bg-no-repeat pl-10 bg-[center_left_10px] shadow-lg  "
            style={{ backgroundImage: `url(/search.svg)` }}
            /> */}
          </form>
          {user && (
            <Image
              src="/cart.svg"
              alt="cart"
              height={32}
              width={32}
              className="hover:cursor-pointer"
            />
          )}
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
