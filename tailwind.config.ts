import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "rgb(59 130 246)",
				secondary: "hsl(240deg 55% 6%)",
				darkBG: "rgb(19,27,71)",
				primaryDisabled: "rgb(5, 40, 97)",
			},
			backgroundImage: {
				"dark-bg-gradient":
					"linear-gradient(75deg, hsl(240deg 64% 9%) 0%, hsl(240deg 63% 8%) 6%, hsl(240deg 62% 8%) 17%, hsl(240deg 61% 7%) 35%, hsl(240deg 59% 7%) 60%, hsl(240deg 58% 6%) 81%, hsl(240deg 55% 6%) 92%, hsl(240deg 52% 5%) 98%, hsl(240deg 47% 5%) 100%, hsl(240deg 37% 4%) 100%)",
				"light-bg-gradient":
					"linear-gradient(75deg, rgba(255,255,255,1) 0%, rgba(235,224,224,1) 50%, rgba(255,255,255,1) 100%)",

				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
