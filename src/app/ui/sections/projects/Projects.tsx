import FeaturedProjectsData from "@/app/data/projects/FeaturedProjectsData";
import Header from "../../components/Header";
import Link from "next/link";
import ShowcaseBox from "../../components/showcase/ShowcaseBox";

export default function Projects() {
	return (
		<section className="main-section" id="projects">
			<Header text="Projects" className="text-6xl" />

			<ShowcaseBox data={FeaturedProjectsData} featured={true}/>

			<div className="text-dark dark:text-light">
				Excited to see more? Click the button below to explore all my other
				projects!
				<br />
				<br />
				<Link
					href="/projects"
					className="px-5 py-2 bg-primary rounded text-light"
					aria-label="View All Projects"
				>
					See All Projects
				</Link>
			</div>
		</section>
	);
}
