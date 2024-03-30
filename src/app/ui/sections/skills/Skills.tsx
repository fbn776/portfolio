import Header from "../../components/Header";
import SkillsData from "@/app/data/skill/SkillsData";
import "./style.css";
import Image from "next/image";
import clsx from "clsx";
import { headerFont } from "../../fonts";

export default function Skills() {
	return (
		<section className="main-section" id="skills">
			<Header text="Skills" textSize="text-6xl" />

			<div className="w-full flex gap-4 flex-wrap">
				{SkillsData.map((category, i) => {
					return (
						<div
							className="relative h-full glass rounded p-4"
							key={i}
						>
							<div className="relative z-10 flex w-full flex-wrap gap-4 justify-center items-center">
								{category.skills.map((skill, j) => {
									return (
										<div
											key={j}
											className=" bg-primary bg-opacity-10 p-4 rounded-md"
										>
											<div className="w-[50px] h-[50px] relative">
												<Image fill={true} src={skill.src} alt={skill.name} />
											</div>
										</div>
									);
								})}
							</div>
							<span
								className={clsx(
									"absolute -top-5 z-0 inset-0 flex items-center justify-center tracking-widest text-5xl opacity-50 text-center text-white font-semibold mt-5",
									headerFont.className
								)}
							>
								{category.name}
							</span>
						</div>
					);
				})}
			</div>
		</section>
	);
}
