import Header from "../../components/Header";
import SkillsData from "@/app/data/skill/SkillsData";
import "./style.css";
import Image from "next/image";

export default function Skills() {
	return (
		<section className="main-section" id="skills">
			<Header text="Skills" textSize="text-6xl" />

			<div className="w-full flex justify-evenly items-stretch gap-4 max-sm:flex-col flex-wrap">
				{SkillsData.map((category, i) => {
					return (
						<div className="h-full p-4 glass rounded flex flex-col" key={i}>
							<div className="flex w-full flex-wrap gap-10 justify-center items-center">
								{category.skills.map((skill, j) => {
									return (
										<div key={j} className=" bg-primary bg-opacity-10 p-4 rounded-md">
											<div className="w-[50px] h-[50px] relative">
												<Image fill={true} src={skill.src} alt={skill.name} />
											</div>
										</div>
									);
								})}
							</div>
							<label className="h-[20px] text-center text-white font-semibold mt-5">
								{category.name}
							</label>
						</div>
					);
				})}
			</div>
		</section>
	);
}
