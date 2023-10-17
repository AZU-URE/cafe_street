import { url } from "inspector";
import Image from "next/image";
export default function Navbar() {
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
        <Image src="/cart.svg" alt="cart" height={32} width={32} />
      </div>
    </nav>
  );
}
