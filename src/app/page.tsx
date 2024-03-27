import HeroPage from "@/app/ui/heropage/HeroPage";
import Background from "./ui/background/Background";
import Navbar from "./ui/Navbar";
import About from "./ui/about/About";
import Skills from "./ui/skills/Skills";

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
