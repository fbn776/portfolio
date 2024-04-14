"use client";

import Link from "next/link";
import {
	IconCategory2,
	IconMoonFilled,
	IconSunFilled,
	IconX,
} from "@tabler/icons-react";
import { textFont, headerFont } from "@/app/ui/fonts";
import { useEffect, useRef, useState } from "react";
import useTheme from "@/app/lib/useTheme";
import "./style.css";
import SidePanel from "./SidePanel";

export default function Navbar() {
	const navbar = useRef<HTMLElement>(null);
	const [theme, changeTheme] = useTheme();
	const [isPanelOpen, setIsPanelOpen] = useState(false);

	useEffect(() => {
		const mainSection = document.querySelector(".main");

		function scrollFunc() {
			if (!navbar.current) return;

			navbar.current.classList.toggle(
				"scrolled-state",
				(mainSection?.scrollTop || 0) > 50
			);
		}

		scrollFunc();
		mainSection?.addEventListener("scroll", scrollFunc);

		return () => {
			mainSection?.removeEventListener("scroll", scrollFunc);
		};
	}, []);

	return (
		<>
			<nav
				ref={navbar}
				className={`${textFont.className} navbar fixed z-50 left-0 w-full text-dark dark:text-light flex justify-between py-5 items-center main-section`}
			>
				<h1
					className={`${headerFont.className} text-2xl tracking-wide text-primary`}
				>
					<Link href="/">FBN776</Link>
				</h1>
				<section className="flex gap-8 max-sm:gap-5">
					<Link draggable="false" href="#about" className="nav-link">
						About
					</Link>
					<Link draggable="false" href="#skills" className="nav-link">
						Skills
					</Link>
					<Link draggable="false" href="#projects" className="nav-link">
						Projects
					</Link>
					<Link draggable="false" href="#contact" className="nav-link">
						Contact
					</Link>
					<button
						onClick={changeTheme}
						className="cursor-pointer relative w-[24px] icon-link"
					>
						<IconMoonFilled
							className={`${
								theme === "light"
									? "scale-1 translate-y-0"
									: "scale-0 translate-y-5"
							} theme-change-icon`}
						/>
						<IconSunFilled
							className={`${
								theme === "dark"
									? "scale-1 translate-y-0"
									: "scale-0 -translate-y-5"
							} theme-change-icon`}
						/>
					</button>
					<button className="sm:hidden icon-link" onClick={() => setIsPanelOpen(true)}>
						<IconCategory2 />
					</button>
				</section>

				<SidePanel
					isPanelOpen={isPanelOpen}
					onClose={() => setIsPanelOpen(false)}
				/>
			</nav>
		</>
	);
}
