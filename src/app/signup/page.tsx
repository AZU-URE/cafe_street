"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function signup() {
  const [passwordVisible, setVisibility] = useState(false);
  const toggleEye = () => {
    setVisibility((current) => !current);
  };
  return (
    <div className="flex items-center w-full">
      <div
        className="relative w-3/4 min-h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(/signup.jpg)` }}
      >
        <Image
          src="/logo_coffe.svg"
          alt="logo"
          height={30}
          width={150}
          className="m-10"
        />
      </div>
      <div
        className="bg-background min-h-screen w-full flex flex-col items-center justify-between p-10 relative bg-contain bg-blend-overlay"
        style={{ backgroundImage: `url(/aboutUs_excludeBg.svg)` }}
      >
        <div className="w-full text-secondary text-right font-poppins ">
          Have an Account ?
          <div className="flex-col items-center inline-flex pl-2">
            <Link href={`/signin`} className="font-semibold">
              Sign In
            </Link>
            <div className="rounded bg-primary min-h-[4px] w-full"></div>
          </div>
        </div>
        {/* form start */}

        <div className="flex flex-col items-center justify-between w-full px-52 text-center font-poppins space-y-5">
          <div>
            <p className="text-3xl font-bold text-secondary mb-1">Sign Up</p>
            <p className="text-light">Get coffee at your doorsteps</p>
          </div>
          <div className="flex flex-col w-full items-center">
            <div className="flex mb-1 space-x-5 w-full items-center justify-center">
              <button className="rounded-md bg-feedbackCardBorder/40 py-2 px-6 border-2 border-light font-semibold text-sm flex items-center justify-evenly">
                <Image
                  src="/google.png"
                  height={20}
                  width={20}
                  alt="google"
                  className="mr-2"
                />
                Google
              </button>
              <button className="rounded-md bg-feedbackCardBorder/40 py-2 px-6 border-2 border-light font-semibold text-sm flex items-center justify-evenly">
                <Image
                  src="/twitter.png"
                  height={20}
                  width={20}
                  alt="google"
                  className="mr-2"
                />
                Twitter
              </button>
            </div>
            <div className="flex w-full items-center justify-center">
              <div className=" bg-light w-full h-[1px] rounded" />
              {/* <hr /> */}
              <p className="  text-sm w-full text-center">or continue with</p>
              {/* <hr /> */}
              <div className=" bg-light w-full h-[1px] rounded" />
            </div>
          </div>
          <div className="w-full">
            <form className=" flex flex-col items-center justify-around space-y-5 w-full text-sm">
              <input
                type="text"
                placeholder="Full name"
                className="w-full p-3 border-2 border-light rounded-lg"
              />
              <input
                type="tel"
                placeholder="Contact number"
                className="w-full p-3 border-2 border-light rounded-lg"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border-2 border-light rounded-lg"
              />
              <div className="relative w-full">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-3 border-2 border-light rounded-lg"
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-light"
                  onClick={toggleEye}
                  type="button"
                >
                  {passwordVisible ? (
                    <Image
                      src="/eye_visible.png"
                      height={20}
                      width={20}
                      alt="eye Closed"
                    />
                  ) : (
                    <Image
                      src="/eye_nonvisible.png"
                      height={20}
                      width={20}
                      alt="eye Closed"
                    />
                  )}
                </button>
              </div>
              <div className="relative w-full">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full p-3 border-2 border-light rounded-lg"
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-light"
                  onClick={toggleEye}
                  type="button"
                >
                  {passwordVisible ? (
                    <Image
                      src="/eye_visible.png"
                      height={20}
                      width={20}
                      alt="eye Closed"
                    />
                  ) : (
                    <Image
                      src="/eye_nonvisible.png"
                      height={20}
                      width={20}
                      alt="eye Closed"
                    />
                  )}
                </button>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-primary font-semibold border-2 border-light rounded-lg"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* form end */}
        <p className="font-poppins text-light">
          By continuing you indicate that you have read and agreed to the Terms
          of Use
        </p>
      </div>
    </div>
  );
}
