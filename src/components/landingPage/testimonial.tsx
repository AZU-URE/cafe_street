import details from "@/config/items.json";
import Image from "next/image";
import FeedbackCard from "./feedbackCard";
export default function Testimonial() {
  const feedbacks = details.feedbacks;
  return (
    <div className="lg:w-2/3 w-full flex lg:flex-row flex-col items-center bg-no-repeat bg-background rounded-r-2xl lg:pb-0 pb-[3rem]">
      <div
        className="relative w-full flex items-center justify-start rounded-r-2xl bg-blend-overlay bg-background"
        style={{ backgroundImage: `url(/aboutUs_excludeBg.svg)` }}
      >
        <div className="flex flex-col  w-full lg:pl-52 lg:py-32 py-[3rem] lg:text-left text-center">
          <p className="font-poppins font-semibold text-3xl mb-6">
            What they say about us
          </p>
          <p className="md:text-lg text-base font-poppins text-light lg:w-1/2 ">
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
      <div className=" lg:absolute lg:right-20 grid md:grid-cols-2 grid-cols-1 lg:gap-40 gap-36 lg:mx-10 ">
        <FeedbackCard />
        <FeedbackCard />
        {/* <FeedbackCard /> */}
      </div>
    </div>
  );
}
