import "./style.css";
import Header from "../../components/Header";
import Socials from "./Socials";
import Connect from "./Connect";

export default function Contact() {
	return (
		<section className="main-section text-dark dark:text-light mb-10" id="contact">
			<Header text="Contact" className="text-6xl" />
			<p>
				Interested in collaborating, discussing potential projects, or simply
				want to connect? Your feedback and inquiries are always welcome!
				Don&apos;t hesitate to reach out through the contact information listed
				below. Let&apos;s start a conversation and explore how we can bring your
				ideas to life.
			</p>
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
