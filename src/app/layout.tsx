import type { Metadata } from "next";
import "./globals.css";
import { textFont } from "@/app/ui/fonts";
import Background from "./ui/background/Background";

export const metadata: Metadata = {
	title: "Febin Nelson P",
	description:
		"Welcome to Febin's Portfolio. I'm a computer science student and a software developer. I love to build things that make a difference.",
	applicationName: "Portfolio",
	authors: {
		name: "fbn776",
	},
	keywords: ["Febin", "Febin Nelson P", "Febin Nelson", "fbn776", "Portfolio", "Computer Science", "Software Development"],
};
``
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body className={`${textFont.className} dark overflow-x-hidden`}>
				<Background />
				{children}
			</body>
		</html>
	);
}
