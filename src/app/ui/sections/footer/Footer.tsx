import {
	IconBrandNextjs,
	IconBrandTailwind,
	IconBrandTypescript,
	IconHeartFilled,
} from "@tabler/icons-react";
import "./style.css";
import { headerFont } from "../../fonts";
import { SocialLinks } from "@/app/data/Links";
import { SocialIcon } from "../../components/SocialIcon";
import Link from "next/link";

export default function Footer() {
	return (
		<section className="main-section text-dark dark:text-light py-5 footer overflow-hidden flex justify-between max-md:flex-col">
			<div>
				<h1
					className={`text-8xl max-sm:text-7xl ${headerFont.className} tracking-wide relative flex`}
				>
					<div className="size-[100px] absolute bg-primary -z-10 blur-3xl"></div>
					<span className="relative z-0 opacity-40 shadow-white font-semibold">
						F B N 7 7 6
					</span>
				</h1>
				<div className="flex gap-5">
					{SocialLinks.map((item, index) => {
						return (
							<Link
								href={item.link}
								key={index}
								className="size-[30px] opacity-30 hover:opacity-100 hover:text-primary"
							>
								{SocialIcon(item.name)}
							</Link>
						);
					})}
				</div>
			</div>
			<div className="flex text-sm flex-col justify-between items-end max-md:mt-7">
				<div className="flex gap-4 lg:gap-10 text-xl max-sm:text-base max-sm:gap-1 max-sm:justify-between max-sm:w-full">
					<Link
						href="#"
						className="hover:text-primary hover:opacity-100 opacity-50"
					>
						Home
					</Link>
					<Link
						href="#about"
						className="hover:text-primary hover:opacity-100 opacity-50"
					>
						About
					</Link>
					<Link
						href="#projects"
						className="hover:text-primary hover:opacity-100 opacity-50"
					>
						Projects
					</Link>
					<Link
						href="#contact"
						className="hover:text-primary hover:opacity-100 opacity-50"
					>
						Contact
					</Link>
				</div>
				<div className="opacity-50 max-md:mt-2 max-sm:w-full max-sm:mt-5">
					<span className="flex justify-center text-xs">
						Made with
						<IconHeartFilled
							size={20}
							className=" text-primary mx-1 max-sm:size-[15px]"
						/>
						by @fbn776
					</span>
					<div className="flex gap-1 mt-1 text-[0.7rem] justify-center items-center">
						Using
						<IconBrandNextjs className="max-sm:size-[14px]" size={17} />
						<IconBrandTypescript className="max-sm:size-[14px]" size={17} />&
						<IconBrandTailwind className="max-sm:size-[14px]" size={17} />
					</div>
				</div>
			</div>
		</section>
	);
}
