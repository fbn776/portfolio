import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandX,
} from "@tabler/icons-react";
import Header from "../components/Header";
import { textFont } from "../fonts";

export default function Abount() {
	return (
		<section>
			<Header text="About" />
			<br />
			<div className="flex gap-10 max-lg:flex-col">
				<div className="min-w-[100%] aspect-square bg-red-900">Hello</div>
				<p className={`${textFont.className} text-white`}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
					bibendum enim facilisis gravida neque convallis a. Dui id ornare arcu
					odio. Elementum tempus egestas sed sed risus pretium. Cursus metus
					aliquam eleifend mi in nulla. Amet consectetur adipiscing elit
					pellentesque habitant morbi tristique senectus et. Sollicitudin ac
					orci phasellus egestas. Odio aenean sed adipiscing diam. Tempor orci
					dapibus ultrices in iaculis nunc. Turpis egestas integer eget aliquet
					nibh praesent tristique magna sit. Egestas integer eget aliquet nibh.
					Vitae tempus quam pellentesque nec nam aliquam. Tempor commodo
					ullamcorper a lacus vestibulum sed arcu. Tortor id aliquet lectus
					proin nibh. Vulputate mi sit amet mauris. Lorem ipsum dolor sit amet
					consectetur adipiscing. Elit ut aliquam purus sit amet luctus. Eget
					duis at tellus at urna condimentum mattis pellentesque id.
				</p>
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