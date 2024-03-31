import ProjectsData from "@/app/data/projects/FeaturedProjectsData";
import Header from "../../components/Header";
import Link from "next/link";
import Image from "next/image";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import "./style.css"

export default function Projects() {
	return (
		<section className="main-section" id="projects">
			<Header text="Projects" textSize="text-6xl" />

			{ProjectsData.map((project, i) => {
				return (
					<div
						className="project-cont"
						data-align={i % 2 ? "right" : "left"}
						key={i}
					>
						<div className="left-section">
							<h2 className="text-primary text-xs font-semibold mb-1">
								Featured Project
							</h2>
							<h1 className="text-3xl font-semibold tracking-wider mb-4">
								{project.title}
							</h1>

							<p className="bg-darkBG p-5 rounded shadow text-pretty opacity-90">
								{project.description}
							</p>

							<div className="tech-stack-cont w-full flex gap-4 text-sm opacity-80 mt-4">
								{project.technologies.map((tech, j) => {
									return <span key={j}>{tech}</span>;
								})}
							</div>

							<div className="flex gap-4 mt-4 links-cont w-full">
								{project.github && (
									<Link href={project.github} target="_blank" rel="noreferrer">
										<IconBrandGithub />
									</Link>
								)}
								{project.website && (
									<Link href={project.website} target="_blank" rel="noreferrer">
										<IconExternalLink />
									</Link>
								)}
							</div>
						</div>
						<div className="right-section overflow-hidden rounded shadow-lg">
							<Image src={project.screenShotSrc} alt={project.title} fill={true}/>
						</div>
					</div>
				);
			})}
		</section>
	);
}
