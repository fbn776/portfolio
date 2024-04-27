"use client";

import { textFont, headerFont } from "@/app/ui/fonts";
import Avatar from "./Avatar";
import { TypeAnimation } from "react-type-animation";
import "./style.css";
import ResumeBtn from "./ResumeBtn";
import { motion } from "framer-motion";

const variants = {
	hidden: { x: -100, opacity: 0 },
	show: {
		x: 0,
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function HeroPage() {
	return (
		<section id="home" className="main-section min-h-[100dvh]">
			<div className="flex w-full pt-28 max-sm:pt-24 justify-between lg:items-center max-lg:justify-end max-lg:gap-16 max-lg:flex-col-reverse max-lg:flex max-lg:items-center max-sm:items-start select-none max-sm:gap-5">
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="show"
					transition={{type: "tween"}}
					className={`${textFont.className} text-dark dark:text-light tracking-wide flex flex-col justify-start items-start`}
				>
					<div className="w-full text-8xl max-sm:text-5xl">
						<motion.span className="block mb-5 max-lg:mb-3" variants={variants}>
							Hello,
						</motion.span>
						I&apos;m{" "}
						<motion.span
							variants={variants}
							className={`${headerFont.className} text-primary text-9xl tracking-wide max-sm:text-7xl mt-20`}
						>
							Febin
						</motion.span>
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
				</motion.div>
				<Avatar />
			</div>
			<ResumeBtn />
		</section>
	);
}

/*
 */
