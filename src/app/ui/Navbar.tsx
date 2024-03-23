"use client";

import Link from "next/link";
import {
	IconCategory2,
	IconMoonFilled,
	IconSunFilled,
} from "@tabler/icons-react";
import { textFont, headerFont } from "@/app/ui/fonts";
import { useEffect, useRef } from "react";

//TODO do this;
export default function Navbar() {
	let theme = "dark";
	const navbar = useRef<HTMLElement>(null);

	useEffect(() => {
		function scrollFunc(e: Event) {
			if(!navbar.current)
				return;

			if(window.scrollY > 50) {
				navbar.current.classList.add('scrolled-state');
			} else {
				navbar.current.classList.remove("scrolled-state");
			}
		}
		window.addEventListener("scroll", scrollFunc);

		return () => {
			window.removeEventListener("scroll", scrollFunc);
		};
	}, []);

	return (
		<>
			<nav
				ref={navbar}
				className={`${textFont.className} navbar fixed z-50 left-0 w-full text-white flex justify-between py-5 px-10 items-center`}
			>
				<h1
					className={`${headerFont.className} text-2xl tracking-wide text-primary`}
				>
					FBN776
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
					{theme === "light" ? <IconMoonFilled /> : <IconSunFilled />}
					<IconCategory2 className="sm:hidden" />
				</section>
			</nav>
		</>
	);
}
