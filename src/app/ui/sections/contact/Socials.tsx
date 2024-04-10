import Link from "next/link";
import { SocialLinks } from "../../../data/Links";
import { IconExternalLink } from "@tabler/icons-react";
import { SocialIcon } from "../../components/SocialIcon";

export default function Socials() {
	return SocialLinks.map((item, index) => {
		return (
			<Link
				key={index}
				href={item.link}
				className="w-[80%] max-sm:w-full m-auto flex p-4 justify-between items-center gap-5 max-lg:gap-3 my-5 glass-bg rounded-lg shadow-lg"
			>
				<div className="size-[60px] p-2 lg:p-3 aspect-square max-sm:size-[40px] bg-primary rounded-full flex items-center justify-center">
					{SocialIcon(item.name)}
				</div>
				<div className="w-full">
					<label className="capitalize tracking-wide">{item.name}</label>
					<span className="text-xs opacity-60 flex items-center">
						@{item.username}
					</span>
				</div>
				<IconExternalLink size={40} />
			</Link>
		);
	});
}
