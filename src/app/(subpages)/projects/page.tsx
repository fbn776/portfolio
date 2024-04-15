import Navbar from "@/app/ui/components/navbar/Navbar";
import ShowcaseBox from "@/app/ui/components/showcase/ShowcaseBox";
import ProjectsData from "@/app/data/projects/ProjectsData";

export default async function Page() {
	return (
		<main id="project-main" className="w-full overflow-x-hidden">
			<Navbar isHomePage={false} parentSelector="#project-main"/>

			<section className="main-section pt-28 text-dark dark:text-light overflow-x-hidden">
				<h1 className="text-5xl">Projects</h1>
				<p className="pt-5">See my other Projects.</p>

				<ShowcaseBox data={ProjectsData} featured={false}/>
			</section>
		</main>
	);
}
