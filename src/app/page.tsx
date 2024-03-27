import HeroPage from "@/app/ui/sections/heropage/HeroPage";
import Background from "./ui/background/Background";
import Navbar from "./ui/components/Navbar";
import About from "./ui/sections/about/About";
import Skills from "./ui/sections/skills/Skills";

export default function Home() {
	return (
		<main className="px-20 max-sm:px-10 overflow-y-auto overflow-x-hidden">
			<Background />
			<Navbar />
			<HeroPage />
			<About />
			<Skills />
		</main>
	);
}
