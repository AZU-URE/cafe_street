import details from "@/config/items.json";
import Image from "next/image";
import FeedbackCard from "./feedbackCard";
export default function Testimonial() {
  const feedbacks = details.feedbacks;
  return (
    <div className="w-2/3 flex items-center bg-no-repeat bg-background rounded-r-2xl">
      <div
        className="relative w-full flex items-center justify-start rounded-r-2xl bg-blend-overlay bg-background"
        style={{ backgroundImage: `url(/aboutUs_excludeBg.svg)` }}
      >
        <div className="flex flex-col pl-52 py-32">
          <p className="font-poppins font-semibold text-3xl mb-6">
            What they say about us
          </p>
          <p className="text-lg font-poppins text-light w-1/2">
            We always provide the best service and always maintain the quality
            of coffee.
          </p>
        </div>
        {/* <Image
          src="/aboutUs_excludeBg.png"
          alt="background"
          className="opacity-10 absolute"
          fill={true}
        /> */}
      </div>
      <div className="absolute right-20 grid grid-cols-2 gap-40 mx-10 ">
        <FeedbackCard />
        <FeedbackCard />
        {/* <FeedbackCard /> */}
      </div>
    </div>
  );
}
