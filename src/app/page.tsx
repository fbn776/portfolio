import HeroSection from "@/app/ui/sections/heropage/hero-section";
import Navbar from "./ui/components/navbar/Navbar";
import AboutSection from "./ui/sections/about/about-section";
import Skills from "./ui/sections/skills/Skills";
import Projects from "./ui/sections/projects/Projects";
import Contact from "./ui/sections/contact/Contact";
import Footer from "./ui/sections/footer/Footer";

export default function Home() {
	return (
		<main className="main overflow-y-scroll w-full h-full overflow-x-hidden">
			<Navbar isHomePage={true}/>
			<HeroSection />
			<AboutSection />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
}
