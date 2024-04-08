import "./style.css"
import Header from "../../components/Header";
import { IconBrandInstagram, IconBrandX, IconCaretRight, IconCornerDownRight } from "@tabler/icons-react";
import Link from "next/link";

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

					<Link href="#" className="w-full flex p-4 items-center gap-5">
						<div className="size-[60px] bg-primary rounded-full flex items-center justify-center">
							<IconBrandInstagram size={40} />
						</div>
						<div className="flex flex-col gap-1">
							<label className="font-semibold">Instagram</label>
							<span className="text-xs opacity-80 flex items-center">
								<IconCaretRight size={15} />
								@fbn776
							</span>
							<span className="text-xs opacity-80 flex">
								<IconCaretRight size={15} />
								https://Instagram.com/fbn776
							</span>
						</div>
					</Link>

					<Link href="#" className="w-full flex p-4 items-center gap-5">
						<div className="size-[60px] bg-primary rounded-full flex items-center justify-center">
							<IconBrandX size={40} />
						</div>
						<div className="flex flex-col gap-1">
							<label className="font-semibold">Twitter(X)</label>
							<span className="text-xs opacity-80 flex items-center">
								<IconCaretRight size={15} />
								@fbn776
							</span>
							<span className="text-xs opacity-80 flex">
								<IconCaretRight size={15} />
								https://twitter.com/fbn776
							</span>
						</div>
					</Link>
				</div>
				<div className="w-full h-full">
					<h2 className="text-center text-4xl">Connect</h2>
				</div>
			</div>
		</section>
	);
}
