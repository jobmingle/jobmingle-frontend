import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
       keyframes: {
        fadeIn: {
          '0%': { opacity:" 0 "},
          '100%': { opacity: "1" },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out forwards',
      },
    
    },
  },
  plugins: [],
};
export default config;
