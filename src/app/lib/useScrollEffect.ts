import { useEffect, useRef } from "react";

/**
 * Hook to control the navbar scroll effect, ie when scrolling down it stays hidden, when scrolling up it shows up.
 * @param parentSelector the css selector of the parent element that the scrolling happens
 * @returns a ref to the navbar element
 */
export default function useScrollEffect(parentSelector: string) {
	const navbar = useRef<HTMLElement>(null);

	useEffect(() => {
		const parent = document.querySelector(parentSelector);
		let lastScroll = 0;

		function scrollFunc() {
			if (!navbar.current) return;
			const currScroll = parent?.scrollTop || 0;

			navbar.current.classList.toggle("scrolled-state", currScroll > 50);

			if (currScroll > 200)
				if (currScroll - lastScroll > 0) {
					navbar.current.classList.add("nav-hide");
				} else {
					navbar.current.classList.remove("nav-hide");
				}

			lastScroll = currScroll;
		}

		scrollFunc();
		parent?.addEventListener("scroll", scrollFunc);

		return () => {
			parent?.removeEventListener("scroll", scrollFunc);
		};
	}, [parentSelector]);

	return [navbar];
}