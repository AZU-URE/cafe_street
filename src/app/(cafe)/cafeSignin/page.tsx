"use client";
import AuthButton from "@/components/AuthButton";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/client";
export default function cafeSignin() {
  const [signin, setSignIn] = useState(true);
  const supabase = createClient();

  const proceed = () => {};
  return (
    <div className="w-full  min-h-fit bg-cafe_login_bg bg-cover flex flex-grow items-center justify-center">
      <div className="bg-red-500/60 backdrop-blur-md w-[50%] h-[70vh] rounded-xl border-2 border-white flex flex-col items-center justify-start space-y-5 p-5">
        <h1 className="text-4xl text-blue-900 font-bold">
          Welcome to Cafe Street
        </h1>
        <div className="flex w-full justify-around  flex-grow">
          <form
            className="flex flex-col h-full items-start justify-center p-5 w-full"
            onSubmit={proceed}
          >
            {!signin ? (
              <div>
                <label className="text-white mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  className="bg-transparent border-2 border-white rounded-xl p-2 placeholder:text-slate-600/50 placeholder:text-sm focus:border-2 focus:outline-none focus:ring-0 focus:border-white mb-5 w-full"
                  placeholder="Garima Mangal"
                ></input>
              </div>
            ) : null}
            <label className="text-white mb-1">Email</label>
            <input
              type="email"
              required
              className="bg-transparent border-2 border-white rounded-xl p-2 placeholder:text-slate-600/50 placeholder:text-sm focus:border-2 focus:outline-none focus:ring-0 focus:border-white mb-5 w-full"
              placeholder="Username@mail.com"
            ></input>
            <label className="text-white mb-1">Password</label>
            <input
              type="password"
              required
              placeholder="*******"
              className="bg-transparent border-2 border-white rounded-xl p-2 placeholder:text-slate-600/50 placeholder:text-sm w-full mb-5"
            ></input>
            <div className="w-full flex mt-5 items-center space-x-4 justify-start">
              <button
                className="p-[0.5rem] bg-blue-800 text-white text-lg w-[50%] rounded-xl"
                type="submit"
              >
                {signin ? "SignIn" : "SignUp"}
              </button>
              <div
                className="text-sm text-blue-800 hover:underline hover:underline-offset-2 cursor-pointer"
                onClick={() => setSignIn((prev) => !prev)}
              >
                {signin ? "SignUp" : "SignIn"} Instead ?
              </div>
            </div>
          </form>
          <div className="bg-white h-full w-1"></div>
          <AuthButton />
        </div>
      </div>
    </div>
  );
}
