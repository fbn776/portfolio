interface EducationDataModel {
	key: string;
	position: string;
	institute: string;
	description?: string;
	skills?: string[];
}

const ExperienceData: EducationDataModel[] = [
	{
		key: "Feb '24",
		position: "Webmaster",
		institute: "IEDC",
		description:
			"As the current Webmaster of the Innovation and Entrepreneurship Development Cell (IEDC) at Rajiv Gandhi Institute of Technology (RIT), I play a pivotal role in managing and enhancing the online presence of the organization. Responsibilities include website maintenance, content management, and implementing strategies to promote events and initiatives. Working closely with team members, I contribute to fostering an environment conducive to innovation and entrepreneurial growth within the institution. This role allows me to utilize my skills in web development and digital marketing to support the goals and objectives of IEDC RIT.",
		skills: ["web development", "team management"],
	},
	{
		key: "Oct '23 - Jan '24",
		position: "Web Developer",
		institute: "EETI Foundation",
		description:
			"As a Web Developer at EETI Foundation, I was responsible for designing, developing, and maintaining the organization's website. I worked closely with the team to create a user-friendly interface that effectively communicated the foundation's mission and goals. My role involved implementing new features, optimizing site performance, and ensuring that the website met the needs of its users. This experience allowed me to enhance my skills in web development, problem-solving, and project management.",
		skills: ["frontend", "reactjs", "js", "tailwindcss"],
	},
	{
		key: "Aprl '23 - Sept '23",
		position: "Web Developer",
		institute: "TedX RIT",
		description:
			"Me and my talented team, worked as web developers for TEDx GEC RIT. Together, we used React.js and Next.js to craft the official event website. This platform provided event details, updates, and an easy ticket purchase process, contributing to the event's online success",
		skills: ["frontend", "nextjs", "typescript"],
	},
];

export default ExperienceData;
