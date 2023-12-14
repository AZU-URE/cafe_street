"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useReducer, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface FormInput {
  email: String;
  password: String;
}
export default function signin() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const [passwordVisible, setVisibility] = useState(false);
  const toggleEye = () => {
    setVisibility((current) => !current);
  };
  const onSignin: SubmitHandler<FormInput> = async (data) => {
    try {
      const body = {
        email: data.email,
        password: data.password,
      };
      // console.log(body);
      const response = await axios.post("api/user/signin", body);
      // console.log(response);
      if (response?.data?.message) {
        toast.success(response?.data?.message);
        router.push("/menu");
      } else if (response?.data?.error) {
        toast.error(response?.data?.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickGoogle = async () => {};
  return (
    <div className="flex flex-row-reverse items-center w-full min-h-screen">
      <Toaster />
      <div
        className="relative w-3/4 min-h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(/login.jpg)` }}
      ></div>
      <div
        className="bg-background min-h-screen w-full flex flex-col items-center justify-stretch p-10 relative bg-contain bg-blend-overlay"
        style={{ backgroundImage: `url(/aboutUs_excludeBg.svg)` }}
      >
        <div className="flex flex-row w-full items-center justify-evenly ">
          <Image
            src="/logo_coffe.svg"
            alt="logo"
            height={30}
            width={150}
            className=""
          />
          <div className="w-full text-secondary text-right font-poppins">
            Don't have an Account ?
            <div className="flex-col items-center inline-flex pl-2">
              <Link href={`/signup`} className="font-semibold">
                Sign Up
              </Link>
              <div className="rounded bg-primary min-h-[4px] w-full"></div>
            </div>
          </div>
        </div>
        {/* form start */}

        <div className="flex flex-col items-center justify-center w-full px-52 text-center font-poppins space-y-10 grow">
          <div>
            <p className="text-3xl font-bold text-secondary mb-1">
              Welcome Back
            </p>
            <p className="text-light">login and order a quick refill</p>
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
            <form
              onSubmit={handleSubmit(onSignin)}
              className=" flex flex-col items-center justify-around space-y-5 w-full text-sm"
            >
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 border-2 border-light rounded-lg"
                {...register("email", {
                  required: "This field is required",
                })}
              />
              <p className="mt-1 font-poppins font-semibold text-red-500">
                {errors?.email && errors?.email?.message}
              </p>
              <div className="relative w-full">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-4 border-2 border-light rounded-lg"
                  {...register("password", {
                    required: "This field is required",
                  })}
                />
                <p className="mt-1 font-poppins font-semibold text-red-500">
                  {errors?.password && errors?.password?.message}
                </p>
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
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="w-5 h-5 accent-primary border-8 border-light"
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <h1 className="text-red-500 hover:cursor-pointer hover:underline">
                  Forget Password
                </h1>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-light/10 font-semibold border-2 border-light rounded-lg"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>

        {/* form end */}
      </div>
    </div>
  );
}
