export interface IProjects {
	title: string;
	description: string;
	screenShotSrc: string;
	technologies: string[];

	github?: string;
	website?: string;
}

const ProjectsData: IProjects[] = [
	{
		title: "UniMate",
		description:
			"UniMate is your go-to companion for navigating college life smoothly and effortlessly. Designed with college students in mind, Unimate simplifies your daily routines, helps you stay organized, and empowers you to excel in your academic journey. UniMate was built by my team HackHive during a 8 hour Hackthon conducted at RIT Kottayam.",
		screenShotSrc: "/projects/unimate.webp",
		technologies: ["NextJS", "ExpressJS", "GenAI", "Education"],
		github: "https://github.com/fbn776/UniMate",
	},
	{
		title: "Assistant",
		description:
			"The AssistScript Chatbot Assistant is an innovative web application designed to provide users with intuitive and efficient assistance using the specially crafted AssistScript language. As a versatile virtual assistant, it offers a wide range of functionalities tailored to meet users' needs, from retrieving information to performing tasks and facilitating communication.",
		screenShotSrc: "/projects/assistant.webp",
		technologies: ["NextJS", "TS", "Interpreter", "Chat bot"],
		github: "https://github.com/fbn776/Assistant",
		website: "https://assistant-ebon.vercel.app/",
	},
];

export default ProjectsData;
