import { IProjects } from "@/app/data/projects/IProjects";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import "./style.css"

export default function ShowcaseBox({data, featured} : {data : IProjects[], featured: boolean}) {
	return (
		<>
			<div className="flex flex-col items-center">
				{data.map((project, i) => {
					return (
						<div
							className="project-cont"
							data-align={i % 2 ? "right" : "left"}
							key={i}
						>
							<div className="left-section">
								<h2 className="text-primary text-xs font-semibold mb-1 max-lg:hidden">
									{featured ? "Featured Project" : "Other Project"}
								</h2>
								<h1 className="text-3xl font-semibold tracking-wider mb-4 max-lg:hidden">
									{project.title}
								</h1>

								<p className="bg-darkBG p-5 text-light lg:rounded-md max-lg:rounded-b-md shadow text-pretty opacity-90 max-lg:text-sm description">
									{project.description}
								</p>
								<div className="tech-stack-cont w-full flex gap-4 text-sm opacity-80 mt-4 max-lg:hidden">
									{project.technologies.map((tech, j) => {
										return <span key={j}>{tech}</span>;
									})}
								</div>
								<div className="flex gap-4 mt-4 links-cont w-full max-lg:justify-end max-lg:text-light">
									{project.github && (
										<Link
											href={project.github}
											target="_blank"
											rel="noreferrer"
											className="max-lg:p-2 max-lg:bg-darkBG glass-border rounded-full"
											aria-label="View project on github"
										>
											<IconBrandGithub className="icon-link" />
										</Link>
									)}
									{project.website && (
										<Link
											href={project.website}
											target="_blank"
											rel="noreferrer"
											className="max-lg:p-2 max-lg:bg-darkBG glass-border rounded-full"
											aria-label="View project website or live demo"
										>
											<IconExternalLink className="icon-link" />
										</Link>
									)}
								</div>
							</div>
							<div className="right-section overflow-hidden lg:rounded-md max-lg:rounded-t-md lg:shadow-2xl">
								<Image
									src={project.screenShotSrc}
									alt={project.title}
									fill={true}
								/>
								<div className="right-overlay">
									<div className="top">
										{featured && <h2 className="text-primary text-xs font-semibold mb-1">
											Featured Project
										</h2>}
										<h2 className="text-3xl font-semibold tracking-wider mb-4" style={{transitionDelay: '0.05s'}}>
											{project.title}
										</h2>
									</div>
									<div className="tech-stack-cont w-full flex justify-end flex-wrap text-xs gap-3 opacity-80 mt-4">
										{project.technologies.map((tech, j) => {
											return <span key={j} style={{transitionDelay: `${j/20}s`}}>{tech}</span>;
										})}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
