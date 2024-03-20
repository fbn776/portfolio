import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandX,
} from "@tabler/icons-react";
import Header from "../components/Header";
import { textFont } from "../fonts";
import Image from "next/image";

export default function Abount() {
	return (
		<section>
			<Header text="About" />
			<br />
			<div className="flex gap-20 max-lg:gap-10 max-lg:flex-col">
				<div className="blob-cont relative flex justify-center items-center min-w-[100%] lg:min-w-[450px] aspect-square bg-red-900">
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
				<div className="flex flex-col justify-between text-white">
					<p className={`${textFont.className} text-white`}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
						bibendum enim facilisis gravida neque convallis a. Dui id ornare
						arcu odio. Elementum tempus egestas sed sed risus pretium. Cursus
						metus aliquam eleifend mi in nulla. Amet consectetur adipiscing elit
						pellentesque habitant morbi tristique senectus et. Sollicitudin ac
						orci phasellus egestas. Odio aenean sed adipiscing diam. Tempor orci
						dapibus ultrices in iaculis nunc. Turpis egestas integer eget
						aliquet nibh praesent tristique magna sit. Egestas integer eget
						aliquet nibh. Vitae tempus quam pellentesque nec nam aliquam. Tempor
						commodo ullamcorper a lacus vestibulum sed arcu. Tortor id aliquet
						lectus proin nibh. Vulputate mi sit amet mauris. Lorem ipsum dolor
						sit amet consectetur adipiscing. Elit ut aliquam purus sit amet
						luctus. Eget duis at tellus at urna condimentum mattis pellentesque
						id.
					</p>

					<div className="flex justify-between items-center mt-5">
						<div className="flex gap-5">
							<IconBrandLinkedin />
							<IconBrandGithub />
							<IconBrandX />
							<IconBrandInstagram />
						</div>

						<button className="bg-primary rounded-lg px-5 py-3">Read More</button>
					</div>
				</div>
			</div>
			<br />
			<br />
		</section>
	);
}

// <div className="flex gap-5">
// 	<IconBrandLinkedin />
// 	<IconBrandGithub />
// 	<IconBrandX />
// 	<IconBrandInstagram />
// </div>;
