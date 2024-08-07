"use client";
import ImageIcon from "@mui/icons-material/Image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingFormType } from "@/config/types";
import { toast, Toaster } from "react-hot-toast";
import { createClient } from "@/utils/client";
export default function onboarding() {
  const supabase = createClient();
  const router = useRouter();
  const [formData, setFormData] = useState<OnboardingFormType>({
    img: "",
    cafeName: "",
    name: "",
    contact: undefined,
    address1: "",
    address2: "",
    landmark: "",
    pincode: undefined,
    city: "",
    state: "",
  });
  const [imgUrl, setUrl] = useState("");
  const submitForm = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Registration Done");
    // router.push("/dashboard");
  };
  const handleLogo = (e: any) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setUrl(url);
    setFormData((prev) => ({ ...prev, img: url }));
  };
  return (
    <div className="w-full min-h-fit flex-grow bg-red-400/20 flex-col flex items-center p-12 space-y-[2rem]">
      <h1 className="text-5xl font-semibold text-blue-800 ">
        Get Started Quickly
      </h1>
      <Toaster />
      <form
        onSubmit={submitForm}
        className="border-[1px] border-blue-700 rounded-xl bg-white/40 w-[50%] h-full flex flex-col items-center p-10 justify-start space-y-5"
      >
        <div className="flex items-center justify-between w-full ">
          <label
            htmlFor="logoUpload"
            className="flex items-center justify-center w-[7rem] h-[7rem] rounded-full bg-zinc-300 relative overflow-hidden"
          >
            {imgUrl != "" ? (
              <img
                src={imgUrl}
                className="object-cover w-[7rem] rounded-full"
              ></img>
            ) : (
              <ImageIcon className="text-[2rem] text-blue-800 " />
            )}
            <input
              type="file"
              name="logoUpload"
              accept="image/*"
              onChange={(e) => handleLogo(e)}
              className="h-full w-full opacity-0 absolute"
            ></input>
          </label>
          <div className="flex flex-col items-start justify-center w-[70%]">
            <label className="text-sm text-blue-800">
              Cafe Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData?.cafeName}
              onChange={(e) =>
                setFormData((prev: any) => ({
                  ...prev,
                  cafeName: e.target.value,
                }))
              }
              required
              placeholder="Cafe xyz"
              className=" border-[1px] border-blue-800 bg-zinc-300 rounded-lg p-3 w-full text-blue-800 focus:border-blue-900 focus:border-2 focus:outline-none focus:ring-0"
            ></input>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <label className="text-sm text-blue-800">
            Owner Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData?.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="Garima Mangal"
            className=" border-[1px] text-blue-800 border-blue-800 bg-zinc-300 rounded-lg p-3 w-full focus:border-blue-900 focus:border-2 focus:outline-none focus:ring-0"
          ></input>
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <label className="text-sm text-blue-800">
            Contact No <span className="text-red-500">*</span>
          </label>
          <input
            value={formData.contact}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, contact: e.target.value }))
            }
            type="tel"
            required
            minLength={10}
            maxLength={10}
            placeholder="923456xxxx"
            className=" border-[1px] text-blue-800 border-blue-800 bg-zinc-300 rounded-lg p-3 w-full focus:border-blue-900 focus:border-2 focus:outline-none focus:ring-0"
          ></input>
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <label className="text-sm text-blue-800">
            Address Line 1 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.address1}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, address1: e.target.value }))
            }
            required
            placeholder="Your Address"
            className=" border-[1px] text-blue-800 border-blue-800 bg-zinc-300 rounded-lg p-3 w-full focus:border-blue-900 focus:border-2 focus:outline-none focus:ring-0"
          ></input>
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <label className="text-sm text-blue-800">Address Line 2</label>
          <input
            type="text"
            value={formData.address2}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, address2: e.target.value }))
            }
            placeholder="Your Address"
            className=" border-[1px] text-blue-800 border-blue-800 bg-zinc-300 rounded-lg p-3 w-full focus:border-blue-900 focus:border-2 focus:outline-none focus:ring-0"
          ></input>
        </div>
        <div className="w-full flex items-center justify-between space-x-[4rem]">
          <div className="flex flex-col items-start justify-center w-full">
            <label className="text-sm text-blue-800">
              Landmark <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.landmark}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, landmark: e.target.value }))
              }
              placeholder="Near ..."
              className=" border-[1px] text-blue-800 border-blue-800 bg-zinc-300 rounded-lg p-3 w-full focus:border-blue-900 focus:border-2 focus:outline-none focus:ring-0"
            ></input>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <label className="text-sm text-blue-800">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, city: e.target.value }))
              }
              required
              placeholder="Your City"
              className=" border-[1px] text-blue-800 border-blue-800 bg-zinc-300 rounded-lg p-3 w-full focus:border-blue-900 focus:border-2 focus:outline-none focus:ring-0"
            ></input>
          </div>
        </div>
        <div className="w-full flex items-center justify-between space-x-[4rem]">
          <div className="flex flex-col items-start justify-center w-full">
            <label className="text-sm text-blue-800">
              Pincode <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.pincode}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  pincode: e.target.value,
                }))
              }
              required
              maxLength={6}
              minLength={6}
              placeholder="474XXX"
              className=" border-[1px] text-blue-800 border-blue-800 bg-zinc-300 rounded-lg p-3 w-full focus:border-blue-900 focus:border-2 focus:outline-none focus:ring-0"
            ></input>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <label className="text-sm text-blue-800">
              State <span className="text-red-500">*</span>
            </label>
            <input
              value={formData.state}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, state: e.target.value }))
              }
              type="text"
              required
              placeholder="Your State"
              className=" border-[1px] text-blue-800 border-blue-800 bg-zinc-300 rounded-lg p-3 w-full focus:border-blue-900 focus:border-2 focus:outline-none focus:ring-0"
            ></input>
          </div>
        </div>
        <div className="pt-[2rem] w-full flex justify-center">
          <button
            type="submit"
            className="bg-blue-800 text-white p-5 w-[30%] rounded-2xl text-lg"
          >
            Save Details
          </button>
        </div>
      </form>
    </div>
  );
}
