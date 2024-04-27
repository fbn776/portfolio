import {SocialLinks} from "@data/Links";
import {IconExternalLink} from "@tabler/icons-react";
import {SocialIcon} from "@/app/ui/components/SocialIcon";
import { motion } from "framer-motion";

export default function Socials() {
    return SocialLinks.map((item, index) => {
        return (
            <motion.div
				key={index}
				initial={{x: -50, opacity: 0}}
				whileInView={{
					x: 0,
					opacity: 1,
					transition: {
						type: "tween",
						delay: index / 10
					}
				}}
			>
				<a
                    href={item.link}
                    aria-label={`View my ${item.name}`}
                    className="w-[80%] max-sm:w-full m-auto flex p-4 justify-between items-center gap-5 max-lg:gap-3 my-5 glass-bg rounded-lg shadow-lg"
                >
				<div
                    className="size-[60px] text-light p-2 lg:p-3 aspect-square max-sm:size-[40px] bg-primary rounded-full flex items-center justify-center">
					{SocialIcon(item.name)}
				</div>
				<div className="w-full">
					<label className="capitalize tracking-wide">{item.name}</label>
					<span className="text-xs opacity-60 flex items-center">
						@{item.username}
					</span>
				</div>
				<IconExternalLink size={40}/>
			</a>
			</motion.div>
        );
    });
}
