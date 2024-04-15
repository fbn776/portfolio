import "./style.css";
import Header from "../../components/Header";
import Socials from "./Socials";
import Connect from "./Connect";
import { IconMail, IconPhone } from "@tabler/icons-react";
import { Email, Phone } from "@/app/data/ContactMe";

export default function Contact() {
	return (
		<section
			className="main-section text-dark dark:text-light mb-10"
			id="contact"
		>
			<Header text="Contact" className="text-6xl" />
			<p>
				Interested in collaborating, discussing potential projects, or simply
				want to connect? Your feedback and inquiries are always welcome!
			</p>
			<div className="mt-10 flex justify-center gap-20 items-center max-sm:flex-col max-sm:items-start max-sm:gap-3">
				
				<span className="flex gap-3 items-center hover-primary">
					<IconMail size="30" className="text-primary"/>
					<a href={`mailto:${Email}`}>{Email}</a>
				</span>
				<span className="flex gap-3 items-center hover-primary">
					<IconPhone size="30" className="text-primary"/>
					<a href={`tel:${Phone}`}>{Phone}</a>
				</span>
			</div>
			<div className="w-full h-fit flex justify-stretch mt-10 max-lg:flex-col ">
				<div className="w-full border-sep flex-1">
					<h2 className="text-center text-4xl">Socials</h2>
					<Socials />
				</div>
				<div className="w-full min-h-full flex flex-col flex-1 max-lg:mt-10">
					<h2 className="text-center text-4xl">Connect</h2>
					<Connect />
				</div>
			</div>
		</section>
	);
}
