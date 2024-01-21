import Image from "next/image";
export default function AuthButton() {
  return (
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
  );
}
