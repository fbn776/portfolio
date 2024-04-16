import { useEffect, useState } from "react";

function getTheme(localTheme: string | null): "light" | "dark" {
	if (localTheme !== null && (localTheme === "dark" || localTheme === "light"))
		return localTheme;

	if (window.matchMedia("(prefers-color-scheme: light)").matches) {
		return "light";
	}

	return "dark";
}

/**
 * Hook to use the theme state and change the theme. This gets the theme from the local storage if it exists, otherwise it gets the theme from the user's system preferences.
 * @returns a tuple containing the current theme and a function to change the theme
 */
export default function useTheme() {
	const [theme, setTheme] = useState<"light" | "dark">("dark");

	useEffect(() => {
		const localTheme = localStorage.getItem("theme");
		const currTheme = getTheme(localTheme);
		setTheme(currTheme);
		document.body.classList.toggle("dark", currTheme === "dark");
	}, []);

	const changeTheme = () => {
		if (theme === "light") {
			document.body.classList.add("dark");
			setTheme("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.body.classList.remove("dark");
			setTheme("light");
			localStorage.setItem("theme", "light");
		}
	};

	return [theme, changeTheme] as const;
}
