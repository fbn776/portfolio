interface EducationDataModel {
	key: string;
	position: string;
	institute: string;
	description?: string;
	skills?: string[];
}

const ExperienceData: EducationDataModel[] = [
	{
		key: "May '26",
		position: "Backend Product Intern",
		institute: "Strollby, UST",
		description:
			"Developed and shipped backend features powering hotel data ingestion and search systems by integrating APIs from global hospitality providers. Built scalable data processing pipelines, including an LLM-assisted workflow that transformed over 16,000 unstructured room descriptions into structured inventory data. Designed and optimized core services for location search, autocomplete, and data enrichment while contributing to infrastructure improvements, testing, and code reviews.",
		skills: [
			"Python",
			"Backend",
			"FastApi",
			"MongoDB",
			"GraphQL",
			"System design",
		],
	},
	{
		key: "Dec '24 - May '26",
		position: "Full Stack Developer",
		institute: "Zynact LLC",
		description:
			"Led development of Convogents, an AI-powered calling assistant for managing bookings and appointments using LLM-powered workflows and telephony systems. Designed a dynamic knowledge base for context-aware AI interactions, made key architectural decisions across backend and system design, and developed Padikkam, an e-learning platform supporting content delivery, quiz automation, and certificate generation.",
		skills: [
			"Backend",
			"MongoDB",
			"PostgreSQL",
			"Nextjs",
			"React",
			"Nodejs",
			"Typescript",
			"AI"
		],
	},
	{
		key: "Oct '23 - Feb '24",
		position: "Frontend Developer",
		institute: "People + AI (Sunva AI)",
		description:
			"Contributed to Sunva AI, an AI-powered communication tool for the deaf community. Built an accessible frontend using Next.js, integrated backend APIs, implemented WebSocket-based real-time transcription, and contributed to frontend architecture and UI improvements for an open-source accessibility project.",
		skills: [
			"nextjs",
			"react",
			"typescript",
			"websockets",
			"frontend",
			"accessibility",
		],
	},
];

export default ExperienceData;
