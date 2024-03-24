import EducationData from "@/app/data/EducationData";
import Timeline from "../components/timeline/Timeline";

export default function Education() {
	return (
		<Timeline
			source={EducationData}
			elmMapper={(data) => {
				return (
					<>
						<h1 className="text-xl mb-2 font-semibold">{data.institution}</h1>
						<h2 className="font-semibold opacity-90"> {data.course}</h2>
						{data.description && (
							<p className="text-pretty py-2 text-base font-light opacity-80">
								{data.description}
							</p>
						)}
						{data.marks && (
							<li className="list-none opacity-90 font-semibold">
								{data.marks}
							</li>
						)}
					</>
				);
			}}
		/>
	);
}
