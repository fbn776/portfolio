interface Skill {
	/**Skill name */
	name: string;
	/**Skill icon src */
	src: string;
}

interface SkillCategory {
	/**Category names */
	name: string;
	/**Skills in the category */
	skills: Skill[];
}

const SkillsData: SkillCategory[] = [
	{
		name: "Frontend",
		skills: [
			{
				name: "HTML",
				src: "icons/html.svg",
			},
			{
				name: "CSS",
				src: "icons/css.svg",
			},
			{
				name: "Tailwindcss",
				src: "icons/tailwindcss.svg",
			},
			{
				name: "React",
				src: "icons/react.svg",
			},
			{
				name: "NextJS",
				src: "icons/nextjs.svg",
			},
		],
	},
	{
		name: "Backend",
		skills: [
			{
				name: "NodeJS",
				src: "icons/nodejs.svg",
			},
			{
				name: "Bun",
				src: "icons/bun.svg",
			},
			{
				name: "ExpressJS",
				src: "icons/expressjs.svg",
			},
			{
				name: "FastAPI",
				src: "icons/fastapi.svg",
			},
			{
				name: "MySQL",
				src: "icons/mysql.svg",
			},
			{
				name: "PostgreSQL",
				src: "icons/postgresql.svg",
			},
		],
	},
	{
		name: "Programming languages",
		skills: [
			{
				name: "JavaScript",
				src: "icons/js.svg",
			},
			{
				name: "TypeScript",
				src: "icons/ts.svg",
			},
			{
				name: "Python",
				src: "icons/python.svg",
			},
			{
				name: "Java",
				src: "icons/java.svg",
			},
			{
				name: "C",
				src: "icons/c.svg",
			},
			{
				name: "Kotlin",
				src: "icons/kotlin.svg",
			},
		],
	},
	{
		name: "Tools",
		skills: [
			{
				name: "Bash",
				src: "icons/bash.svg",
			},
			{
				name: "postman",
				src: "icons/postman.svg",
			},
			{
				name: "npm",
				src: "icons/npm.svg",
			},
			{
				name: "git",
				src: "icons/git.svg",
			},
			{
				name: "Ubuntu",
				src: "icons/ubuntu.svg",
			},
			{
				name: "Windows",
				src: "icons/windows.svg",
			},
			{
				name: "VS Code",
				src: "icons/vscode.svg"
			}
		],
	},
];

export default SkillsData;
