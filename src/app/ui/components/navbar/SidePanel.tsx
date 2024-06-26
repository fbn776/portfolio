import { IconX } from "@tabler/icons-react";
import Link from "next/link";

function getDelay(isOpen: boolean, delay: number) {
	return {
		transitionDelay: isOpen ? 0.5 + delay + "s" : "0s",
	};
}

export default function SidePanel({
	isPanelOpen,
	onClose,
}: {
	isPanelOpen: boolean;
	onClose: () => void;
}) {
	return (
		<div className={`mobile-nav-panel ${isPanelOpen ? "opened" : ""}`}>
			<Link
				draggable="false"
				href="#about"
				className="nav-btn"
				style={getDelay(isPanelOpen, 0)}
				onClick={onClose}
				aria-label="About me"
			>
				About
			</Link>
			<Link
				draggable="false"
				href="#skills"
				className="nav-btn"
				style={getDelay(isPanelOpen, 0.1)}
				onClick={onClose}
				aria-label="My Skills"
			>
				Skills
			</Link>
			<Link
				draggable="false"
				href="#projects"
				className="nav-btn"
				style={getDelay(isPanelOpen, 0.2)}
				onClick={onClose}
				aria-label="My Projects"
			>
				Projects
			</Link>
			<Link
				draggable="false"
				href="#contact"
				className="nav-btn"
				style={getDelay(isPanelOpen, 0.3)}
				onClick={onClose}
				aria-label="Contact Me"
			>
				Contact
			</Link>
			<button
				aria-label="Close side panel"
				className="nav-btn opacity-90 text-red-400"
				onClick={onClose}
				style={getDelay(isPanelOpen, 0.4)}
			>
				Close
			</button>
			<button onClick={onClose} aria-label="Close side panel">
				<IconX
					className="fixed top-10 right-10 text-red-400 opacity-90"
					size="30"
				/>
			</button>
		</div>
	);
}
