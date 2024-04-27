"use client";

import { motion } from "framer-motion";

export default function Header({
	text,
	className = "text-4xl",
	id,
}: {
	text: string;
	className?: string;
	id?: string;
}) {
	return (
		<motion.h2
			initial={{ opacity: 0, x: -100 }}
			whileInView={{ opacity: 1, x: 0 }}
			className={`header ${className}`}
			id={id || ""}
		>
			{text}
		</motion.h2>
	);
}
