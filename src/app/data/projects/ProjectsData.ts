import { IProjects } from "./IProjects";

const ProjectsData: IProjects[] = [
	{
		title: "Live ASCII camera",
		description:
			"The ASCII Live Camera Feed Web App is a simple project built with vanilla JavaScript, HTML, and CSS. It lets users view their camera feed as ASCII art in real-time directly from their web browser. This project was a fun experiment.",
		technologies: ["HTML", "CSS", "JS"],
		screenShotSrc: "/projects/ascii-cam.webp",
		github: "https://github.com/fbn776/cam-to-ascii",
		website: "https://fbn776.github.io/cam-to-ascii/",
	},
	{
		title: "Matrix Calculator",
		description:
			"The Matrix Calculator is a web app designed specially for mobile phones (can still be used on larger screens), created using vanilla JavaScript, HTML, and CSS. With a focus on usability, it provides essential matrix operations like addition, subtraction, and multiplication, alongside advanced functions such as adjoint, inverse, and transpose. Users can save and load their calculations. You can even share your calculations to others using the share button, enhancing collaboration and convenience. This app was designed for my use case when I was studying in my 11th standard students. Later turned into a full app. Anyone needing a quick and efficient matrix calculator can use this on the go.",
		technologies: ["HTML", "CSS", "JS", "Maths"],
		screenShotSrc: "/projects/matrix-calc.webp",
		github: "https://github.com/fbn776/matrix-calculator",
		website: "https://fbn776.github.io/matrix-calculator/",
	},
	{
		title: "WhatsApp sender",
		description:
			"The WhatsApp Message Sender is a web app developed using vanilla HTML, CSS, and JavaScript. It facilitates sending messages to phone numbers without saving them as contacts. Users input the recipient's number and their message within the app. Upon submission, the app redirects to the WhatsApp Web interface or the mobile app, prefilled with the provided number and message. This straightforward tool prioritizes simplicity and efficiency, making it perfect for quick communication needs without the clutter of contact management.",
		technologies: ["HTML", "CSS", "JS"],
		screenShotSrc: "/projects/whatsapp-send.webp",
		github: "https://github.com/fbn776/whatsapp",
		website: "https://fbn776.github.io/whatsapp/",
	},
	{
		title: "Cave Copter",
		description:
			"Cave Copter is a 2D grayscale game made in Canvas2D using JavaScript, HTML, and CSS. This minimalist game features an infinite procedurally generated cave for players to navigate. With simple controls, players guide the copter through the cave, avoiding obstacles to stay alive.",
		technologies: ["HTML", "CSS", "JS", "Game"],
		screenShotSrc: "/projects/cave-copter.webp",
		github: "https://github.com/fbn776/copter",
		website: "https://fbn776.github.io/copter",
	},
	{
		title: "Sine waves",
		description:
			"The Sine Waves is a simple web app showcasing additions of random sine waves on a canvas. Developed with HTML, CSS, and JavaScript. Showcases the super position of random sine waves. Each sine wave has a random frequency, amplitude, and phase. At a time upto 10 different waves are generated and displayed",
		technologies: ["HTML", "CSS", "JS", "Maths"],
		screenShotSrc: "/projects/sine-waves.webp",
		github: "https://github.com/fbn776/sine-waves",
		website: "https://fbn776.github.io/sine-waves/",
	},
	{
		title: "Flappy box",
		description:
			"A simple flappy bird clone, but instead of the bird, its a box and instead of the pipes, trusses are used. Made using HTML, CSS, and JavaScript. This procedurally generated world with dynamic skies and a simple game play",
		technologies: ["HTML", "CSS", "JS", "Game"],
		screenShotSrc: "/projects/flappy-box.webp",
		github: "https://github.com/fbn776/flappy-box",
		website: "https://fbn776.github.io/flappy-box/",
	},
	{
		title: "Falling Sand",
		description:
			"A falling sand simulator. Where you can simulate particles falling and interacting with each other. Made using HTML, CSS, and JavaScript. This uses cellular automaton. The project was inspired by the falling sand game",
		technologies: ["HTML", "CSS", "JS", "Game"],
		screenShotSrc: "/projects/falling-sand.webp",
		github: "https://github.com/fbn776/falling-sand",
		website: "https://fbn776.github.io/falling-sand/",
	},
];

/*
	{
		title: "",
		description: "",
		technologies: [],
		screenShotSrc: "",
		github: "",
		website: ""
	}
*/

export default ProjectsData;
