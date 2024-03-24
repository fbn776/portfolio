interface EducationDataModel {
	key: string;
	position: string;
	institute: string;
	description?: string;
	skills?: string[];
}

const ExperienceData: EducationDataModel[] = [
	{
		key: "2024*",
		position: "Webmaster",
		institute: "IEDC",
		description:
			"As the current Webmaster of the Innovation and Entrepreneurship Development Cell (IEDC) at Rajiv Gandhi Institute of Technology (RIT), I play a pivotal role in managing and enhancing the online presence of the organization. Responsibilities include website maintenance, content management, and implementing strategies to promote events and initiatives. Working closely with team members, I contribute to fostering an environment conducive to innovation and entrepreneurial growth within the institution. This role allows me to utilize my skills in web development and digital marketing to support the goals and objectives of IEDC RIT.",
		skills: ["ts", "js", "html", "css", "nextjs", "marketing and finance"],
	},
];

export default ExperienceData;
/*
For the experience section of your portfolio, you could write something like:

*/
