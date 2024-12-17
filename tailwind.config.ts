import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	mode: "jit",
	// purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {
			screens: {
				xsm: "320px",
				smd: "395px",
			},
			fontFamily: {
				sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
			},
			// keyframes: {
			// 	fadeIn: {
			// 		"0%": { opacity: " 0 " },
			// 		"100%": { opacity: "1" },
			// 	},
			// },
			animation: {
				borderMove: "border-move 4s linear infinite",
				fadeIn: "fadeIn 0.2s ease-in-out forwards",
				bounceIn: "bounceIn 2.5s ease-in-out",
			},
			keyframes: {
				borderMove: {
					"0%": { backgroundPosition: "0% 0%" },
					"100%": { backgroundPosition: "200% 0%" },
				},
				fadeIn: {
					"0%": { opacity: " 0 " },
					"100%": { opacity: "1" },
				},
				bounceIn: {
					"0%": {
						transform: "translateY(-100%)",
						animationTimingFunction: "ease-in",
					},
					"60%": {
						transform: "translateY(20%)",
						animationTimingFunction: "ease-out",
					},
					"80%": {
						transform: "translateY(-10%)",
						animationTimingFunction: "ease-in",
					},
					"100%": {
						transform: "translateY(0%)",
						animationTimingFunction: "ease-out",
					},
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"sign-up": "url('../Signup/images/signupbanner.png",
			},
			colors: {
				black: {
					DEFAULT: "#000",
					100: "#2C2A2A",
				},
			},
		},
	},
	plugins: [],
};

export default config;
