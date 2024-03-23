
interface EducationModel {
	title: string,
	institution: string,
	course: string,
	description?: string,
	marks?: string
}

const EducationData: EducationModel[] = [
	{
		title: '2019 - 2021',
		institution: "St Aloysius Senior Secondary School",
		description: "In my 10th grade, I attended St. Aloysius Senior Secondary School, a CBSE-affiliated institution, where I attained a commendable score of 90% in the final examination. This achievement underscores both my commitment to academic excellence and the high standard of education offered by the school.",
		course: "10th standard",
		marks: '90%'
	},

	{
		title: '2021 - 2022',
		institution: "St Aloysius Senior Secondary School",
		description: "In my 12th standard at St. Aloysius Senior Secondary School, I attained a notable score of 93.4% in the final exam, reflecting my commitment to academic excellence within a reputable CBSE-affiliated institution.",
		course: "12th standard",
		marks: '93.4%',
	},

	{
		title: '2022 - 2026',
		institution: "Rajiv Gandhi Institute of Technology Kottayam",
		description: "At Rajiv Gandhi Institute of Technology (RIT), one of Kerala's most prestigious Government Engineering Colleges (GEC), I'm currently pursing my Bachelor of Technology in Computer Science and Engineering. And currently has Cumulative Grade Point Average (CGPA) of 9.27.",
		course: "BTech in CSE",
		marks: '9.27 cpga'
	},
];

export default EducationData;