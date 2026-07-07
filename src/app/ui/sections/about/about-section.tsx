import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandX,
} from "@tabler/icons-react";
import Header from "../../components/header";
import { textFont } from "../../fonts";
import Image from "next/image";
import Education from "./education";
import Experience from "./experience";
import Link from "next/link";
import MyLinks from "@/app/data/Links";

export default function AboutSection() {
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
							Hello! I&#39;m <span className="text-primary">Febin Nelson P</span>, a
							Software Engineer and Computer Science graduate from Rajiv Gandhi
							Institute of Technology (RIT), Kottayam.
							<br />
							<br />
						</p>

						<p>
							I enjoy building reliable, scalable software with a focus on creating
							products that solve real-world problems. My interests span backend
							engineering, full-stack development, cloud technologies, and system
							design. I value writing clean, maintainable code and continuously
							learning better ways to build software.
							<br />
							<br />
						</p>

						<p>
							Over the years, I&#39;ve built and contributed to web applications,
							self-hosted solutions, and developer tools using technologies such as{" "}
							<span className="text-primary">
			Go, TypeScript, React, Next.js, Node.js, Express.js, PostgreSQL,
			MySQL, Docker, Git, and AWS.
		</span>{" "}
							I enjoy turning ideas into polished products and collaborating with
							teams to deliver meaningful solutions.
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


			<Header text="Experience" />
			<Experience />
			<br />
			<br />

			<Header text="Education" id="education" />
			<Education />
			<br />
			<br />
		</section>
	);
}
