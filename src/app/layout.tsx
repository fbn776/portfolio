import type { Metadata, Viewport } from "next";
import "./globals.css";
import { textFont } from "@/app/ui/fonts";
import Background from "./ui/background/Background";

export const metadata: Metadata = {
	metadataBase: new URL("https://fbn776.vercel.app"),
	title: "Febin Nelson P",
	description:
		"Welcome to Febin's Portfolio. I'm a computer science student and a software developer. I love to build things that make a difference.",

	applicationName: "Portfolio",

	authors: [
		{
			name: "fbn776",
			url: "https://fbn776.vercel.app",
		},
	],

	keywords: [
		"Febin",
		"Febin Nelson P",
		"Febin Nelson",
		"fbn776",
		"Portfolio",
		"Computer Science",
		"Software Development",
	],

	icons: {
		apple: "/apple-touch-icon.png",
		icon: [
			{
				url: "/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				url: "/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
		],
		other: [
			{
				rel: "mask-icon",
				url: "/safari-pinned-tab.svg",
				color: "#5bbad5",
			},
		],
	},

	manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
	themeColor: "#da532c",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${textFont.className} dark overflow-x-hidden`}>
				<Background />
				{children}
			</body>
		</html>
	);
}
