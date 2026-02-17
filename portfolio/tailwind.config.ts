import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. Define the custom marquee animation
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      // 2. The math: translate exactly half of the doubled array
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      // 3. Ensuring your bg-slate-950 and cyan accents are crisp
      colors: {
        slate: {
          950: "#05070a", // The deep senior-dev background we discussed
        },
      },
    },
  },
  plugins: [],
};

export default config;
