import Link from "next/link";

export default function HomepageLinks() {
	return (
		<>
			<Link draggable="false" href="#about" className="nav-link">
				About
			</Link>
			<Link draggable="false" href="#skills" className="nav-link">
				Skills
			</Link>
			<Link draggable="false" href="#projects" className="nav-link">
				Projects
			</Link>
			<Link draggable="false" href="#contact" className="nav-link">
				Contact
			</Link>
		</>
	);
}