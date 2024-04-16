import EducationData from "@/app/data/about/EducationData";
import Timeline from "../../components/timeline/Timeline";
import ReadMore from "../../components/ReadMore";

export default function Education() {
	return (
		<Timeline
			source={EducationData}
			elmMapper={(data) => {
				return (
					<>
						<h1 className="text-xl mb-2 font-semibold">{data.institution}</h1>
						<h2 className="font-semibold opacity-90"> {data.course}</h2>
						{data.description && (<ReadMore description={data.description}/>)}
						{data.marks && (
							<div className="opacity-90 font-semibold">
								{data.marks}
							</div>
						)}
					</>
				);
			}}
		/>
	);
}
