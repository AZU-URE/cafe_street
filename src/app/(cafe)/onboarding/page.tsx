import Navbar from "@/components/cafe/Navbar";
export default function onboarding() {
  return (
    <div className="w-full min-h-fit flex-grow bg-red-400/20 flex-col flex items-center p-12 space-y-[2rem]">
      <h1 className="text-5xl font-semibold text-blue-800 ">
        Get Started Quickly
      </h1>
      <form className="border-[1px] border-blue-700 rounded-xl bg-white/10 w-[50vw] h-[50vh]"></form>
    </div>
  );
}
