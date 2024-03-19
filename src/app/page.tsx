import HeroPage from "@/app/ui/home/HeroPage";
import Background from "./ui/background/Background";
import Navbar from "./ui/home/Navbar";
import About from "./ui/home/About";

export default function Home() {
	return (
		<main className="px-20 max-sm:px-10 overflow-y-auto overflow-x-hidden">
			<Background />
			<Navbar />
			<HeroPage />
			<About/>
		</main>
	);
}
