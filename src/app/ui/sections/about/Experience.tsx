import ExperienceData from "@/app/data/about/ExperienceData";
import Timeline from "../../components/timeline/Timeline";

export default function Experience() {
	return (
		<Timeline
			source={ExperienceData}
			elmMapper={(data, i) => {
				return (
					<>
						<h1 className="text-xl mb-2 font-semibold">{data.position}</h1>
						<h2 className="font-semibold">{data.institute}</h2>

						{data.description && (
							<p className="text-pretty py-2 text-base font-light opacity-80">
								{data.description}
							</p>
						)}
						{data.skills && (
							<div className="flex gap-3 mt-2 flex-wrap skill-bubbles">
								{data.skills.map((text, i) => {
									return (
										<span
											className="px-4 bg-primary text-light bg-opacity-60 text-sm py-1 rounded-full min-w-[50px] text-center"
											key={i}
										>
											{text}
										</span>
									);
								})}
							</div>
						)}
					</>
				);
			}}
		/>
	);
}
