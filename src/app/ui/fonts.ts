import { Teko, Poppins } from "next/font/google";

export const secondaryFont = Teko({
	subsets: ["latin"],
	weight: ["400"],
});

export const textFont = Poppins({
	weight: ["400"],
	subsets: ["latin"],
});
