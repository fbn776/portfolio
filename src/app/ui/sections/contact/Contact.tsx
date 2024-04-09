import "./style.css";
import Header from "../../components/Header";
import Socials from "./Socials";

export default function Contact() {
	return (
		<section className="main-section text-white mb-10" id="contact">
			<Header text="Contact" textSize="text-6xl" />
			<p>
				Interested in collaborating, discussing potential projects, or simply
				want to connect? Your feedback and inquiries are always welcome!
				Don&apos;t hesitate to reach out through the contact information listed
				below. Let&apos;s start a conversation and explore how we can bring your
				ideas to life.
			</p>
			<div className="w-full flex justify-stretch mt-10 max-lg:flex-col">
				<div className="w-full h-full border-sep ">
					<h2 className="text-center text-4xl">Socials</h2>
					<Socials />
				</div>
				<div className="w-full h-full">
					<h2 className="text-center text-4xl">Connect</h2>
				</div>
			</div>
		</section>
	);
}
