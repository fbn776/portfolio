import "./style.css"
import Header from "../../components/Header";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconCaretRight, IconError404 } from "@tabler/icons-react";
import Link from "next/link";
import { SocialLinks } from "@/app/data/Links";

const getBrandIcon = (name: string) => {
	switch(name) {
		case "instagram":
			return <IconBrandInstagram size={40} />
		case "github":
			return <IconBrandGithub size={40} />
		case "linkedin":
			return <IconBrandLinkedin size={40} />;
		case "twitter":
			return <IconBrandX size={40} />
		default:
			return <IconError404 size={40} />;
	}
}


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
					<div >
						{SocialLinks.map((item, index) => {
							return (
								<Link
									key={index}
									href={item.link}
									className="w-[80%] m-auto flex p-4 items-center gap-5 my-5 bg-red-200 glass-bg rounded-lg shadow-lg"
								>
									<div className="size-[60px] bg-primary rounded-full flex items-center justify-center">
										{getBrandIcon(item.name)}
									</div>
									<div className="flex flex-col gap-1">
										<label className="capitalize tracking-wide">
											{item.name}
										</label>
										<span className="text-xs opacity-90 flex items-center">
											@{item.username}
										</span>
										<span className="text-xs opacity-60 flex">{item.link}</span>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
				<div className="w-full h-full">
					<h2 className="text-center text-4xl">Connect</h2>
				</div>
			</div>
		</section>
	);
}
