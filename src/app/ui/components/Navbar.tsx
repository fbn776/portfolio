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
		function scrollFunc() {
			if(!navbar.current)
				return;

			navbar.current.classList.toggle('scrolled-state', window.scrollY > 50);
		}
		scrollFunc();
		window.addEventListener("scroll", scrollFunc);


		// TODO REMOVE THIS;
		const toggleTheme = () => {
			console.log("Changed Theme");
			document.body.classList.toggle("dark");
		};
		window.addEventListener("click", toggleTheme);

		return () => {
			window.removeEventListener("click", toggleTheme);

			// TODO REMOVE THIS;
			window.removeEventListener("scroll", scrollFunc);
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
