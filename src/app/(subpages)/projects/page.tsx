import Navbar from "@/app/ui/components/navbar/Navbar";
import ShowcaseBox from "@/app/ui/components/showcase/ShowcaseBox";
import ProjectsData from "@/app/data/projects/ProjectsData";

export default function Page() {
	return (
		<main id="project-main" className="main fixed inset-0 overflow-y-scroll w-full overflow-x-hidden">
			<Navbar isHomePage={false} parentSelector="#project-main" />

			<section
				className="main-section pt-28 text-dark dark:text-light overflow-x-hidden"
				id="main"
			>
				<h1 className="text-5xl mb-10">Projects</h1>
				<ShowcaseBox data={ProjectsData} featured={false} />
			</section>
		</main>
	);
}
