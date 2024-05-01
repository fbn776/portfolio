import {useEffect, useRef} from "react";

/**
 * Hook to control the navbar scroll effect, ie when scrolling down it stays hidden, when scrolling up it shows up.
 * @param parentSelector the css selector of the parent element that the scrolling happens
 * @returns a ref to the navbar element
 */
export default function useScrollEffect(parentSelector: string) {
    const navbar = useRef<HTMLElement>(null);
    let lastVisibleTime = 0;

    useEffect(() => {
        const parent = document.querySelector(parentSelector);
        let lastScroll = 0;

        function scrollFunc() {
            if (!navbar.current) return;
            const currScroll = parent?.scrollTop || 0;

            navbar.current.classList.toggle("scrolled-state", currScroll > 50);

            if (currScroll > 200) {
                const hideNav = currScroll > lastScroll;

                if (Date.now() - lastVisibleTime > 1000 || !hideNav) {
                    navbar.current.classList.toggle("nav-hide", hideNav);

                    lastVisibleTime = Date.now();
                }
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