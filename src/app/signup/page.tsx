"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface FormInput {
  name: String;
  contact: String;
  email: String;
  password: String;
  passwordRe: String;
}
export default function signup() {
  const [passwordVisible, setVisibility] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormInput>();
  const toggleEye = () => {
    setVisibility((current) => !current);
  };
  useEffect(() => {
    if (getValues("password") === getValues("passwordRe")) {
      if (getValues("passwordRe") === "") {
        setMessage(" ");
      } else {
        setMessage("Password Matches");
      }
    } else {
      setMessage("Password do not Matches");
    }
  }, [getValues("passwordRe"), getValues("password")]);

  const onSignup: SubmitHandler<FormInput> = async (data) => {
    try {
      setLoading(true);
      const body = {
        name: data.name,
        contact: data.contact,
        email: data.email,
        password: data.password,
      };
      console.log(body);

      const response = await axios.post("api/user/signup", body);
      console.log(response);
      toast.success(response?.data?.message);
    } catch (error: any) {
      console.log(error.message);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center w-full overflow-y-auto min-h-screen">
      <Toaster />
      <div
        className="relative w-3/4 bg-clip-content bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(/signup_1.jpg)` }}
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
        className="bg-background min-h-screen w-full relative bg-contain bg-blend-overlay p-10"
        style={{ backgroundImage: `url(/aboutUs_excludeBg.svg)` }}
      >
        <div className="w-full text-secondary text-right font-poppins">
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
            <form
              className=" flex flex-col items-center justify-around space-y-5 w-full text-sm"
              onSubmit={handleSubmit(onSignup)}
            >
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full p-3 border-2 border-light rounded-lg"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
                <p className="mt-1 font-poppins font-semibold text-red-500">
                  {errors.name && errors.name?.message}
                  {/* hiii */}
                </p>
              </div>
              <div className="w-full flex flex-col">
                <input
                  type="tel"
                  placeholder="Contact number"
                  className="w-full p-3 border-2 border-light rounded-lg"
                  {...register("contact", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    maxLength: {
                      value: 10,
                      message: "Enter a valid number.",
                    },
                    minLength: {
                      value: 10,
                      message: "Enter a valid number.",
                    },
                  })}
                />
                <p className=" mt-1 font-poppins font-semibold text-red-500">
                  {errors.contact && errors.contact?.message}
                </p>
              </div>
              <div className="w-full flex flex-col">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border-2 border-light rounded-lg"
                  {...register("email", {
                    required: "This field is required",
                  })}
                />
                <p className="mt-1 font-poppins font-semibold text-red-500">
                  {errors.email && errors.email?.message}
                </p>
              </div>
              <div className="relative w-full">
                <div className="w-full flex flex-col">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Password"
                    className="w-full p-3 border-2 border-light rounded-lg"
                    {...register("password", {
                      required: "This field is required",
                      minLength: {
                        value: 8,
                        message: "Please enter at least 8 characters.",
                      },
                    })}
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
                  <p className=" mt-1 font-poppins font-semibold text-red-500">
                    {errors.password && errors.password?.message}
                  </p>
                </div>
              </div>

              <div className="w-full flex flex-col">
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="w-full p-3 border-2 border-light rounded-lg"
                    {...register("passwordRe", {
                      required: "This field is required",
                      validate: (value) => value === getValues("password"),
                    })}
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
                <p
                  className={` mt-1 font-poppins font-semibold ${
                    message === "Password Matches"
                      ? "text-green-700"
                      : "text-red-500"
                  } `}
                >
                  {message}
                </p>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-primary font-semibold border-2 border-light rounded-lg"
              >
                {isLoading ? "Loading" : "Sign Up"}
              </button>
            </form>
          </div>
        </div>

        {/* form end */}
        <p className="font-poppins text-light text-center mt-3">
          By continuing you indicate that you have read and agreed to the Terms
          of Use
        </p>
      </div>
    </div>
  );
}
