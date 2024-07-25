"use client";
import Navbar from "@/components/cafe/Navbar";
import { CafeFeature, CartContactUs } from "@/config/types";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [contactData, setContactData] = useState<CartContactUs>({
    name: "",
    email: "",
    message: "",
  });
  const onContact = () => {
    console.log(contactData);
  };
  return (
    <div className=" min-h-screen max-w-screen">
      <Navbar />
      <div className="bg-product_landing_page w-full h-screen bg-cover bg-no-repeat flex items-end pb-10 justify-center relative">
        <button className="rounded-full bg-red-500 h-[6rem] w-[6rem] fixed bottom-[5%] right-[3%] font-bold text-white ring-red-500 ring-[1px] p-2">
          Go to Cafe Menu
        </button>
        <div className="w-[30rem] h-[30rem] rounded-full  bg-slate-500/30 backdrop-blur-md flex items-center justify-center flex-col relative">
          <h1 className="text-[4.5rem] font-bold text-blue-700 font-serif">
            Cafe Street
          </h1>
          <p className="text-[1.25rem] font-bold text-white text-center">
            Simplify Your Management, Delight Your Customers
          </p>
          <button className="mt-[5rem] bottom-[5rem] p-3 w-[50%] rounded-lg bg-blue-800 hover:bg-blue-700 hover:-translate-y-2 text-white">
            Manage Menu
          </button>
        </div>
      </div>
      <section className="py-[8rem] px-[5rem] flex items-center justify-center space-x-[5rem] max-w-full bg-gradient-to-b from-red-400/20 to-blue-200">
        <div className="flex items-start justify-center flex-col space-y-4 w-[40%]">
          <h1 className="text-[2.5rem] text-blue-700 ">
            Fastest way to set up your Menu
          </h1>
          <p className="text-slate-500 w-[80%] text-[1rem]">
            With{" "}
            <span className="italic font-semibold text-slate-600">
              Cafe Street
            </span>{" "}
            you can streamline your experience of managing a cafe.
          </p>
        </div>
        <img src="/cafe/illus_website.png" className="w-[30%]"></img>
      </section>
      <section className="flex items-center justify-center flex-col bg-gradient-to-b from-blue-200 to-blue-200/60 py-[5rem] px-[8rem]">
        <h1 className="text-[2.5rem] text-blue-700 mb-4">Features</h1>
        <p className=" w-[20%] text-center text-slate-500 mb-[5rem]">
          An app to ease the heat off cafe owners and make managing your cafe a
          breeze
        </p>
        <div className="grid grid-cols-3 gap-[8rem] w-full px-[4rem]">
          <FeatItem
            img="/cafe/tablet.png"
            heading="Digital Menu"
            desc="Effortlessly update and display your cafe's menu with our intuitive digital menu feature."
          ></FeatItem>
          <FeatItem
            img="/cafe/table.png"
            heading="SeatView"
            desc="Easily manage and reserve available seats for your customers with our SeatView feature."
          ></FeatItem>
          <FeatItem
            img="/cafe/online-payment.png"
            heading="Online Payment"
            desc="Streamline transactions with secure and convenient online payment options."
          ></FeatItem>
        </div>
      </section>
      <section className="flex items-center justify-center flex-col bg-gradient-to-b from-blue-200/60 to-white py-[5rem] px-[8rem]">
        <h1 className="text-[2.5rem] text-blue-700 mb-4">Contact Us</h1>
        <p className=" text-center text-slate-500 mb-[2rem]">
          We are here to help you with seamless onboarding.
        </p>
        <div className="w-full px-[4rem] flex items-center justify-around space-x-[10rem]">
          <div className="p-[2rem] shadow-2xl rounded-xl bg-white items-center justify-center flex flex-col w-[30%]">
            <p className="mb-[2rem] font-bold text-blue-700 text-lg">
              Get In Touch
            </p>
            <form
              className="w-full flex flex-col items-start justify-center space-y-[2rem]"
              onSubmit={onContact}
            >
              <input
                type="text"
                placeholder="Your Name"
                value={contactData.name}
                onChange={(e) =>
                  setContactData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full rounded-full p-2 px-3 bg-zinc-200 text-black placeholder-black text-sm"
              ></input>
              <input
                type="text"
                placeholder="Your Email"
                value={contactData.email}
                onChange={(e) =>
                  setContactData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full rounded-full p-2 px-3 bg-zinc-200 text-black placeholder-black text-sm"
              ></input>
              <textarea
                placeholder="Message"
                value={contactData.message}
                onChange={(e) =>
                  setContactData((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                className="w-full rounded-xl p-2 px-3 bg-zinc-200 text-black placeholder-black text-sm"
                rows={5}
              ></textarea>
              <button
                className="bg-blue-700 text-white px-4 py-2 rounded-full w-[50%]"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
          <img src="/cafe/cafe_contact.png" className="w-[50%]"></img>
        </div>
      </section>
      <footer className="bg-zinc-400 px-[3rem] py-[0.75rem] w-full flex items-center justify-between">
        <p className="text-white">
          Made with 💕 in IN by{" "}
          <Link
            href={"https://www.github.com/AZU-URE"}
            className="underline italic"
            target="_blank"
          >
            Garima
          </Link>
        </p>
      </footer>
    </div>
  );
}

function FeatItem({ img, heading, desc }: CafeFeature) {
  return (
    <div className="rounded-2xl px-[1.5rem] py-[1rem] shadow-2xl flex flex-col items-center space-y-5 ring-[1px] bg-white/50 hover:-translate-y-2 backdrop-blur-sm backdrop-filter">
      <div className="rounded-full bg-blue-300/30 p-3 mt-2">
        <img src={img}></img>
      </div>
      <h1 className="text-xl font-bold text-blue-700">{heading}</h1>
      <p className="text-center">{desc}</p>
    </div>
  );
}
