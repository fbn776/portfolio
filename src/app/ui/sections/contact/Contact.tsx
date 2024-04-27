"use client";

import "./style.css";
import Header from "../../components/Header";
import Socials from "./Socials";
import Connect from "./Connect";
import { IconMail, IconPhone } from "@tabler/icons-react";
import { Email, Phone } from "@/app/data/ContactMe";
import { motion } from "framer-motion";
import {fadeRightChildVariant, staggerParentVariant} from "@data/framer-anims";

export default function Contact() {
	return (
		<motion.section
			className="main-section text-dark dark:text-light mb-10"
			id="contact"
			variants={staggerParentVariant}
		>
			<Header text="Contact" className="text-6xl" />
			<motion.p
				transition={{type: "tween"}}
				variants={fadeRightChildVariant}
				initial="hidden"
				whileInView="show"
			>
				Interested in collaborating, discussing potential projects, or simply
				want to connect? Your feedback and inquiries are always welcome!
			</motion.p>
			<div className="mt-10 flex justify-center gap-20 items-center max-sm:flex-col max-sm:items-start max-sm:gap-3">
				<motion.span className="flex gap-3 items-center hover-primary"
							 transition={{type: "tween"}}
							 variants={fadeRightChildVariant}
							 initial="hidden"
							 whileInView="show"
				>
					<IconMail size="30" className="text-primary"/>
					<a href={`mailto:${Email}`} aria-label="Send me an email">{Email}</a>
				</motion.span>
				<motion.span className="flex gap-3 items-center hover-primary"
							 transition={{type: "tween"}}
							 variants={fadeRightChildVariant}
							 initial="hidden"
							 whileInView="show"
				>
					<IconPhone size="30" className="text-primary"/>
					<a href={`tel:${Phone}`} aria-label="Call me">{Phone}</a>
				</motion.span>
			</div>
			<div className="w-full h-fit flex justify-stretch mt-10 max-lg:flex-col ">
				<div className="w-full border-sep flex-1">
					<h2 className="text-center text-4xl">Socials</h2>
					<Socials />
				</div>
				<div className="w-full min-h-full flex flex-col flex-1 max-lg:mt-10">
					<h2 className="text-center text-4xl">Connect</h2>
					<Connect />
				</div>
			</div>
		</motion.section>
	);
}
