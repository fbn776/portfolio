import Navbar from "@/app/ui/components/navbar/Navbar";
import ShowcaseBox from "@/app/ui/components/showcase/ShowcaseBox";
import FeaturedProjectsData from "../../data/projects/FeaturedProjectsData";

export default function Page() {
	return (
		<main>
			<Navbar isHomePage={false} />

			<section className="main-section pt-28 text-dark dark:text-light">
				<h1 className="text-5xl">Projects</h1>
				<p className="pt-5">See my other Projects.</p>

				<ShowcaseBox data={FeaturedProjectsData} featured={false}/>
			</section>
		</main>
	);
}
