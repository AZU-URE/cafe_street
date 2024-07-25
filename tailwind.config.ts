import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        coffee: "url('/public/menu/categoryCard/coffee.webp')",
        product_landing_page: "url('/cafe/product_bg.jpg')",
      },
      colors: {
        primary: "#FF902B",
        secondary: "#2F2105",
        background: "#F6EBDA",
        accents: "#F9D9AA",
        light: "#7E7D7A",
        glass: "#FFFFFF",
        chrome: "#F4AE26",
        feedbackCard: "#FFCB7C",
        feedbackCardBorder: "#FFD390",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        slowBouce: "slow-bounce 1s infinite",
      },
      keyframes: {
        slowBounce: {
          "0% , 100%": {
            transform: "translateY(-10%)",
            AnimationTimeline: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            AnimationTimeline: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
