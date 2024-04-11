import Header from "../../components/Header";
import SkillsData from "@/app/data/skill/SkillsData";
import "./style.css";
import Image from "next/image";

export default function Skills() {
	return (
		<section className="main-section" id="skills">
			<Header text="Skills" className="text-6xl" />

			<div className="w-full flex gap-4 items-stretch justify-stretch max-lg:flex-col">
				{SkillsData.map((category, i) => {
					return (
						<div
							className="h-full glass rounded p-4 flex flex-col gap-6"
							key={i}
						>
							<label className="text-center text-dark dark:text-light font-semibold bg-primary bg-opacity-20 rounded p-2">
								{category.name}
							</label>
							<div className="flex w-full flex-wrap gap-4 justify-center items-center">
								{category.skills.map((skill, j) => {
									return (
										<div
											key={j}
											className="card-flip bg-primary bg-opacity-10 p-4 rounded-md"
											data-name={skill.name}
										>
											<div className="w-[50px] h-[50px] relative">
												<Image fill={true} src={skill.src} alt={skill.name} />
											</div>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
