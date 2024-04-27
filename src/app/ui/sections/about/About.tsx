import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandX,
} from "@tabler/icons-react";
import Header from "../../components/Header";
import { textFont } from "../../fonts";
import Image from "next/image";
import Education from "./Education";
import Experience from "./Experience";
import Link from "next/link";
import MyLinks from "@/app/data/Links";

export default function About() {
	return (
		<section id="about" className="main-section">
			<Header text="About" className="text-6xl" />
			<br />
			<div className="flex gap-20 max-lg:gap-10 max-lg:flex-col">
				<div className="blob-cont blob-anim-2 relative flex justify-center items-center min-w-[100%] lg:self-center lg:min-w-[450px] lg:max-h-[500px] aspect-square">
					<div className="absolute bottom-0 aspect-square w-[80%] inline-block">
						<Image
							src="/images/about.webp"
							fill={true}
							alt="About side image"
							quality={100}
							draggable={false}
							priority={true}
						/>
					</div>
				</div>
				<div className="flex flex-col justify-between text-dark dark:text-light">
					<div className={`${textFont.className} text-dark dark:text-light`}>
						<p>
							Hello there! My name is{" "}
							<span className="text-primary">Febin Nelson P</span>. I&apos;m
							currently a second year student pursuing Bachelor of
							Technology(BTech) in Computer Science and Engineering at Rajiv
							Gandhi Institute of Technology (RIT) Kottayam.
							<br />
							<br />
						</p>
						<p>
							I am a passionate and dedicated developer and an aspiring software
							engineer with a strong interest in creating innovative and solving problems.
							I&apos;m experienced in web technologies, software development, and project management. I am
							always looking for opportunities to expand my skills and
							knowledge. <br />I&apos;m experienced in working with
							various technologies and tools like{" "}
							<span className="text-primary">
								ReactJS, Node.js, Express.js, NextJS, MySQL, Git, and more.
							</span>
							<br />
							<br />
						</p>
						<p className="max-sm:hidden">
							I have worked on various projects and initiatives, and I have
							excelled academically. I am always looking for opportunities to
							learn and grow, and I am excited about what the future holds.
						</p>
					</div>

					<div className="flex justify-between items-center mt-5">
						<div className="flex gap-5 max-sm:gap-3">
							<Link href={MyLinks.linkedin} aria-label="See my linkedin profile">
								<IconBrandLinkedin className="icon-link" />
							</Link>
							<Link href={MyLinks.github} aria-label="See my github profile">
								<IconBrandGithub className="icon-link" />
							</Link>
							<Link href={MyLinks.twitter} aria-label="See my twitter(now X) profile">
								<IconBrandX className="icon-link" />
							</Link>
							<Link href={MyLinks.instagram} aria-label="See my instagram profile">
								<IconBrandInstagram className="icon-link" />
							</Link>
						</div>

						<Link
							href="#education"
							className="bg-primary rounded-lg px-5 py-3 max-sm:py-2 text-light"
							aria-label="Read about my education"
						>
							Read More
						</Link>
					</div>
				</div>
			</div>
			<br />

			<Header text="Education" id="education" />
			<Education />
			<br />

			<Header text="Experience" />
			<Experience />
			<br />
			<br />
		</section>
	);
}
