"use client";

import { textFont, headerFont } from "@/app/ui/fonts";
import Avatar from "./Avatar";
import { TypeAnimation } from "react-type-animation";
import "./style.css";
import ResumeBtn from "./ResumeBtn";

export default function HeroPage() {
	return (
		<section className="main-section min-h-[100dvh]">
			<div className="flex w-full pt-28 max-sm:pt-24 justify-between lg:items-center max-lg:justify-end max-lg:gap-16 max-lg:flex-col-reverse max-lg:flex max-lg:items-center max-sm:items-start select-none max-sm:gap-5">
				<div
					className={`${textFont.className} text-dark dark:text-light tracking-wide flex flex-col justify-start items-start`}
				>
					<div className="text-8xl max-lg:hidden">
						<span className="block mb-5 max-lg:inline">Hello, </span>
						I&apos;m{" "}
						<span
							className={`${headerFont.className} text-primary text-9xl tracking-wide`}
						>
							Febin
						</span>
					</div>
					<div className="w-full text-8xl hidden max-lg:inline-block max-sm:text-5xl">
						Hello,
						<span className="block mt-3">
							I&apos;m{" "}
							<span
								className={`${headerFont.className} text-primary text-9xl max-sm:text-7xl tracking-wide mt-20`}
							>
								Febin
							</span>
						</span>
					</div>

					<br />

					<TypeAnimation
						sequence={[
							">",
							"> CS undergrad",
							1000,
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
						className="text-3xl max-sm:text-lg max-sm:opacity-80 max-sm:mt-[-18px]"
						preRenderFirstString={true}
					/>
				</div>
				<Avatar />
			</div>
			<ResumeBtn />
		</section>
	);
}

/*
 */
