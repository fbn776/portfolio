"use client";
import { useState } from "react";

export default function ReadMore({ description }: { description: string }) {
	const [expanded, setExpanded] = useState(false);
	return (
		<>
			<p
				className={`text-pretty py-2 text-base font-light opacity-80 max-sm:pb-0 ${
					!expanded && "max-sm:line-clamp-3"
				}`}
			>
				{description}
			</p>
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
