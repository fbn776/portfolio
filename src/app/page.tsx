import HeroPage from "@/app/ui/home/HeroPage";
import Background from "./ui/background/Background";

export default function Home() {
	return (
		<main className="px-20">
            <Background/>
			<HeroPage />
		</main>
	);
}
