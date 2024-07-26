"use client";
import Navbar from "@/components/cafe/Navbar";
import { CafeFeature, CartContactUs } from "@/config/types";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function Home() {
  const [contactData, setContactData] = useState<CartContactUs>({
    name: "",
    email: "",
    message: "",
  });
  const onContact = async (e: any) => {
    e.preventDefault();
    console.log(contactData);
    const apiEndpoint = "/api/cafe/contactUs";
    const respone = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(contactData),
    });
    // console.log(respone);

    if (respone.status == 200) {
      toast.success("Mail sent Successfully");
    } else {
      toast.error("Mail not Sent");
    }
    setContactData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className=" min-h-screen max-w-screen">
      <Navbar />
      <div className="bg-product_landing_page w-full h-screen bg-cover bg-no-repeat flex md:items-end items-center pb-10 justify-center relative">
        <Toaster />
        <button className="md:text-base text-xs rounded-full bg-red-500 md:h-[6rem] md:w-[6rem] w-[4.5rem] h-[4.5rem] fixed bottom-[5%] right-[3%] font-bold text-white ring-red-500 ring-[1px] p-2 z-10">
          Go to Cafe Menu
        </button>
        <div className="lg:w-[30rem] lg:h-[30rem] w-[23rem] h-[23rem] rounded-full  bg-slate-500/30 backdrop-blur-md flex items-center justify-center flex-col relative">
          <h1 className="lg:text-[4.5rem] text-[3.5rem] font-bold text-blue-700 font-serif">
            Cafe Street
          </h1>
          <p className="lg:text-[1.25rem] md:text-[1rem] font-bold text-white text-center">
            Simplify Your Management, Delight Your Customers
          </p>
          <button className="lg:mt-[5rem] mt-[2rem] bottom-[5rem] lg:p-3 p-2 w-[50%] rounded-lg bg-blue-800 hover:bg-blue-700 hover:-translate-y-2 text-white">
            Manage Menu
          </button>
        </div>
      </div>
      <section className="lg:py-[8rem] md:py-[5rem] py-[3rem] lg:px-[5rem] px-[2rem] flex md:flex-row flex-col-reverse items-center justify-center md:space-x-[5rem] max-w-full bg-gradient-to-b from-red-400/20 to-blue-200">
        <div className="flex md:items-start items-center justify-center flex-col space-y-4 md:w-[40%]">
          <h1 className="lg:text-[2.5rem] text-[2rem] text-blue-700 md:text-left text-center">
            Fastest way to set up your Menu
          </h1>
          <img
            src="/cafe/illus_website.png"
            className="md:w-[30%] w-[80%] md:mb-0 mb-5 flex md:hidden"
          ></img>
          <p className="text-slate-500 lg:w-[80%] md:w-[90%] lg:text-[1rem] text-[0.9rem] md:text-left text-center">
            With{" "}
            <span className="italic font-semibold text-slate-600">
              Cafe Street
            </span>{" "}
            you can streamline your experience of managing a cafe.
          </p>
        </div>
        <img
          src="/cafe/illus_website.png"
          className="md:w-[30%] w-[80%] md:mb-0 mb-5 md:flex hidden"
        ></img>
      </section>
      <section className="flex items-center justify-center flex-col bg-gradient-to-b from-blue-200 to-blue-200/60 lg:py-[8rem] md:py-[5rem] py-[3rem] lg:px-[5rem] px-[2rem]">
        <h1 className="lg:text-[2.5rem] text-[2rem] text-blue-700 mb-4">
          Features
        </h1>
        <p className=" lg:w-[20%] md:w-[40%] lg:text-[1rem] text-[0.9rem] text-center text-slate-500 mb-[5rem]">
          An app to ease the heat off cafe owners and make managing your cafe a
          breeze
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-[8rem] md:gap-[6rem] gap-[2rem] w-full md:px-[4rem] px-[2rem] place-content-center">
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
      <section className="flex items-center justify-center flex-col bg-gradient-to-b from-blue-200/60 to-white lg:py-[8rem] py-[5rem] lg:px-[5rem] px-[2rem]">
        <h1 className="lg:text-[2.5rem] text-[2rem] text-blue-700 mb-4">
          Contact Us
        </h1>
        <img
          src="/cafe/cafe_contact.png"
          className="w-[80%] flex md:hidden"
        ></img>
        <p className=" text-center text-slate-500 mb-[2rem] lg:text-[1rem] text-[0.9rem]">
          We are here to help you with seamless onboarding.
        </p>
        <div className="w-full lg:px-[4rem] md:px-0 px-[1rem] flex md:flex-row flex-col items-center justify-around lg:space-x-[10rem] space-x-[5rem]">
          <div className="lg:p-[2rem] md:p-[1.25rem] p-[1.5rem] shadow-2xl rounded-xl bg-white items-center justify-center flex flex-col lg:w-[30%] w-full">
            <p className="mb-[2rem] font-bold text-blue-700 text-lg">
              Get In Touch
            </p>
            <form
              className="w-full flex flex-col items-start justify-center lg:space-y-[2rem] space-y-[1.5rem]"
              onSubmit={onContact}
            >
              <input
                type="text"
                placeholder="Your Name"
                value={contactData.name}
                required
                onChange={(e) =>
                  setContactData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full rounded-full p-2 px-3 bg-zinc-200 text-black placeholder-black text-sm"
              ></input>
              <input
                required
                type="email"
                placeholder="Your Email"
                value={contactData.email}
                onChange={(e) =>
                  setContactData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full rounded-full p-2 px-3 bg-zinc-200 text-black placeholder-black text-sm"
              ></input>
              <textarea
                required
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
          <img
            src="/cafe/cafe_contact.png"
            className="w-[50%] md:flex hidden"
          ></img>
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
    <div className="rounded-2xl sm:px-[1.5rem] px-[1rem] py-[1rem] shadow-2xl flex flex-col items-center lg:space-y-5 space-y-3 ring-[1px] bg-white/50 hover:-translate-y-2 backdrop-blur-sm backdrop-filter">
      <div className="rounded-full bg-blue-300/30 p-3 mt-2">
        <img src={img}></img>
      </div>
      <h1 className="lg:text-xl text-lg font-bold text-blue-700 text-center">
        {heading}
      </h1>
      <p className="text-center lg:text-base text-sm">{desc}</p>
    </div>
  );
}
