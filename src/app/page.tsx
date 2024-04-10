import HeroPage from "@/app/ui/sections/heropage/HeroPage";
import Navbar from "./ui/components/Navbar";
import About from "./ui/sections/about/About";
import Skills from "./ui/sections/skills/Skills";
import Projects from "./ui/sections/projects/Projects";
import Contact from "./ui/sections/contact/Contact";
import Footer from "./ui/sections/footer/Footer";

export default function Home() {
	return (
		<main className="overflow-y-auto overflow-x-hidden">
			<Navbar />
			<HeroPage />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
}
