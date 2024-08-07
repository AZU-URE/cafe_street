import Image from "next/image";
import { createClient } from "@/utils/client";
export default function AuthButton() {
  const supabase = createClient();

  const onclickGoogle = async (provider: any) => {
    var baseUrl;
    if (window === undefined) {
      baseUrl = "https://cafe-street-chi.vercel.app";
    } else {
      baseUrl = window.location.origin;
    }

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: `${baseUrl}/menu`,
      },
    });
    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col p-5 mb-1 w-full items-center justify-center space-y-5 h-full">
      <button
        onClick={() => onclickGoogle("google")}
        className="rounded-md bg-red-600 py-[0.5rem] text-white w-[70%] font-semibold text-lg flex items-center justify-center space-x-[1rem]"
      >
        <Image
          src="/google.png"
          height={30}
          width={30}
          alt="google"
          className="mr-2 bg-white rounded-full p-1"
        />
        Google
      </button>
      <div className="text-white font-bold text-xl">Or</div>
      <button
        onClick={() => onclickGoogle("twitter")}
        className="rounded-md bg-blue-500 py-[0.5rem] text-white w-[70%] font-semibold text-lg flex items-center justify-center space-x-[1rem]"
      >
        <Image
          src="/twitter.png"
          height={30}
          width={30}
          alt="google"
          className="mr-2"
        />
        Twitter
      </button>
    </div>
  );
}
