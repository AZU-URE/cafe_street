import Image from "next/image";
import newletter from "./newsletter.svg";
import { useState } from "react";
import axios from "axios";
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Subscribe");
  const subscribe = async () => {
    if (email == "") {
      alert("Please enter your email");
    } else {
      try {
        const response = await axios.post("/api/newsletter/addEmail", {
          email,
        });
        console.log(response?.data?.message);
        setMessage("Done");
        setEmail("");
        setTimeout(() => {
          setMessage("Subscribe");
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    }
    // console.log("reavched");
  };

  return (
    <div className=" lg:px-52 lg:py-32 md:p-[3rem] p-[1rem] w-full h-[500] relative flex items-center justify-center">
      <img width={1170} height={392} src="/newsletter.svg" alt="newseletter" />
      <div className="absolute flex flex-col">
        <p className="text-white font-semibold font-poppins md:text-3xl text-lg">
          Subscribe to get 50% discount price
        </p>
        <div className="mx-10 mt-10 flex items-center relative ">
          <input
            type="text"
            className="w-full rounded-full md:p-4 p-2 font-poppins font-semibold md:text-base text-xs "
            placeholder="Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required={true}
          />
          <button
            onClick={subscribe}
            className="md:text-base text-[10px] md:px-5 px-3 absolute md:p-2 p-1 md:top-2 top-1 right-12 -mr-10 rounded-full bg-secondary text-white font-semibold flex items-center justify-center"
          >
            {message}
          </button>
        </div>
      </div>
    </div>
  );
}
