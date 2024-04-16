import { Theme } from "@/app/lib/types";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

export default function ThemeButton({
	changeTheme,
	theme,
}: {
	changeTheme: () => void;
	theme: Theme;
}) {
	return (
		<button
			onClick={changeTheme}
			className="cursor-pointer relative w-[24px] icon-link"
		>
			<IconMoonFilled
				className={`${
					theme === "light" ? "scale-1 translate-y-0" : "scale-0 translate-y-5"
				} theme-change-icon`}
			/>
			<IconSunFilled
				className={`${
					theme === "dark" ? "scale-1 translate-y-0" : "scale-0 -translate-y-5"
				} theme-change-icon`}
			/>
		</button>
	);
}