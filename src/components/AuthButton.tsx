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
    <div className="flex mb-1 space-x-5 w-full items-center justify-center">
      <button
        onClick={() => onclickGoogle("google")}
        className="rounded-md bg-feedbackCardBorder/40 py-2 px-6 border-2 border-light font-semibold text-sm flex items-center justify-evenly"
      >
        <Image
          src="/google.png"
          height={20}
          width={20}
          alt="google"
          className="mr-2"
        />
        Google
      </button>
      <button
        onClick={() => onclickGoogle("twitter")}
        className="rounded-md bg-feedbackCardBorder/40 py-2 px-6 border-2 border-light font-semibold text-sm flex items-center justify-evenly"
      >
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
