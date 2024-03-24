import EducationData from "@/app/data/EducationData";
import Timeline from "../components/timeline/Timeline";

export default function EducationTimeline() {
	return (
		<Timeline
			source={EducationData}
			elmMapper={(data) => {
				return (
					<>
						<h1 className="text-xl mb-2 font-semibold">{data.institution}</h1>
						<li> {data.course}</li>
						{data.description ? (
							<p className="text-pretty py-2 pl-5 text-base font-light opacity-80">
								{data.description}
							</p>
						) : (
							""
						)}
						{data.marks ? <li>{data.marks}</li> : ""}
					</>
				);
			}}
		/>
		);
}
