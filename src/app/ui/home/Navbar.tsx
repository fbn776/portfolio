import Link from "next/link";
import {
	IconCategory2,
	IconMoonFilled,
	IconSunFilled,
} from "@tabler/icons-react";
import { textFont, secondaryFont } from "@/app/ui/fonts";

//TODO do this;
export default function Navbar() {
	let theme = "dark";

	return (
		<>
			<nav
				className={`${textFont.className} w-full text-white flex justify-between py-10 items-center`}
			>
				<h1
					className={`${secondaryFont.className} text-2xl tracking-wide text-primary`}
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
