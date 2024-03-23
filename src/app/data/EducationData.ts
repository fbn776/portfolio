
interface EducationModel {
	from: string,
	to: string,
	institution: string,
	course: string,
}

const EducationData: EducationModel[] = [
	{
		from: "2019",
		to: "2020",
		institution: "St Aloysius Senior Secondary School",
		course: "10th standard",
	},

	{
		from: "2021",
		to: "2022",
		institution: "St Aloysius Senior Secondary School",
		course: "12th standard",
	},

	{
		from: "2022",
		to: "2026",
		institution: "Rajiv Gandhi Institute of Technology Kottayam",
		course: "BTech in CSE",
	},
];

export default EducationData;