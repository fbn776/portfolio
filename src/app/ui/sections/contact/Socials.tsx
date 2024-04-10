import Link from "next/link";
import { SocialLinks } from "../../../data/Links";
import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandX,
	IconError404,
	IconExternalLink,
} from "@tabler/icons-react";

const getBrandIcon = (name: string) => {
	switch (name) {
		case "instagram":
			return <IconBrandInstagram className="size-full" />;
		case "github":
			return <IconBrandGithub className="size-full" />;
		case "linkedin":
			return <IconBrandLinkedin className="size-full" />;
		case "twitter":
			return <IconBrandX className="size-full" />;
		default:
			return <IconError404 className="size-full" />;
	}
};

export default function Socials() {
	return SocialLinks.map((item, index) => {
		return (
			<Link
				key={index}
				href={item.link}
				className="w-[80%] max-sm:w-full m-auto flex p-4 justify-between items-center gap-5 max-lg:gap-3 my-5 glass-bg rounded-lg shadow-lg"
			>
				<div className="size-[60px] p-2 lg:p-3 aspect-square max-sm:size-[40px] bg-primary rounded-full flex items-center justify-center">
					{getBrandIcon(item.name)}
				</div>
				<div className="w-full">
					<label className="capitalize tracking-wide">{item.name}</label>
					<span className="text-xs opacity-60 flex items-center">
						@{item.username}
					</span>
				</div>
				<IconExternalLink size={40}/>
			</Link>
		);
	});
}
