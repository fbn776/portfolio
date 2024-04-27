"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {fadeRightChildVariant} from "@data/framer-anims";

export default function ReadMore({ description }: { description: string }) {
	const [expanded, setExpanded] = useState(false);
	return (
		<>
			<motion.p
				transition={{type: "tween"}} variants={fadeRightChildVariant} initial="hidden" whileInView="show"
				className={`text-pretty py-2 text-base font-light opacity-80 max-sm:pb-0 ${
					!expanded && "max-sm:line-clamp-3"
				}`}
			>
				{description}
			</motion.p>
			<button
				className="font-bold text-sm text-right w-full pb-2 opacity-80 sm:hidden hover:text-primary"
				onClick={() => {
					setExpanded((prev) => !prev);
				}}
			>
				{expanded ? "Read less" : "Read more"}
			</button>
		</>
	);
}
