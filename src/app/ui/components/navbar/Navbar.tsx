"use client";

import "./style.css";
import Link from "next/link";
import { IconCategory2, IconHome } from "@tabler/icons-react";
import { textFont, headerFont } from "@/app/ui/fonts";
import { useState } from "react";
import useTheme from "@/app/lib/useTheme";
import SidePanel from "./SidePanel";
import HomepageLinks from "./HomepageLinks";
import ThemeButton from "./ThemeButton";
import useScrollEffect from "@/app/lib/useScrollEffect";

export default function Navbar({
	isHomePage,
	parentSelector = ".main",
}: {
	isHomePage: boolean;
	parentSelector?: string;
}) {
	const [theme, changeTheme] = useTheme();
	const [isPanelOpen, setIsPanelOpen] = useState(false);
	const [navbar] = useScrollEffect(parentSelector);

	return (
		<nav
			ref={navbar}
			className={`${textFont.className} select-none navbar fixed z-50 left-0 w-full text-dark dark:text-light flex justify-between py-5 items-center main-section`}
		>
			<h1
				className={`${headerFont.className} text-2xl tracking-wide text-primary`}
			>
				<Link href="/" aria-label="Go Home">
					FBN776
				</Link>
			</h1>
			<section className="flex gap-8 max-sm:gap-5">
				{isHomePage && <HomepageLinks />}

				<ThemeButton changeTheme={changeTheme} theme={theme} />

				{isHomePage ? (
					<button
						aria-label="Open side panel"
						className="sm:hidden icon-link"
						onClick={() => setIsPanelOpen(true)}
					>
						<IconCategory2 />
					</button>
				) : (
					<Link href="/" aria-label="Go Home" className="icon-link">
						<IconHome />
					</Link>
				)}
			</section>

			<SidePanel
				isPanelOpen={isPanelOpen}
				onClose={() => setIsPanelOpen(false)}
			/>
		</nav>
	);
}
