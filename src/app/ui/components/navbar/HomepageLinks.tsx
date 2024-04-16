import Link from "next/link";

export default function HomepageLinks() {
	return (
		<>
			<Link draggable="false" href="#about" className="nav-link" aria-label="About me">
				About
			</Link>
			<Link draggable="false" href="#skills" className="nav-link" aria-label="My Skills">
				Skills
			</Link>
			<Link draggable="false" href="#projects" className="nav-link" aria-label="My Projects">
				Projects
			</Link>
			<Link draggable="false" href="#contact" className="nav-link" aria-label="Contact Me">
				Contact
			</Link>
		</>
	);
}