"use client";

import Navbar from "@/app/ui/home/Navbar";
import clsx from "clsx";
import { inter, teko } from "@/app/ui/fonts";
import Image from "next/image";
import AvatarSVG from "./Avatar";
import { TypeAnimation } from "react-type-animation";
export default function Header() {
	return (
		<>
			<Navbar />
			<section className="flex w-full justify-between">
				<div
					className={`${inter.className} mt-10 text-white text-8xl leading-tight tracking-wide max-w-[60%]`}
				>
					<h1 className="mb-6">Hello;</h1>
					<div>
						I&apos;m{" "}
						<span className={clsx(teko.className, "text-primary text-9xl m-0")}>
							Febin
						</span>
					</div>

					<TypeAnimation
						sequence={[
							"> Student",
							1000,
							"> Developer",
							1000,
							"> Full Stack Developer",
							1000,
							"> Aspiring Engineer",
							2000,
						]}
						aria-label="I'm a student, front end dev, web dev, full stack, aspiring engineer"
						speed={25}
						repeat={Infinity}
						className="text-3xl m-0"
					/>
				</div>
				<AvatarSVG />
			</section>
		</>
	);
}
