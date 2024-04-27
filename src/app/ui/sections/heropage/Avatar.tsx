import Image from "next/image";
import "./style.css";
import { motion } from "framer-motion";

export default function Avatar() {
	return (
		<motion.div
			className="avatar-cont blob-cont blob-anim-1"
			initial={{
				x: 100,
				opacity: 0,
			}}
			whileInView={{
				x: 0,
				opacity: 1,
			}}
		>
			<motion.div
				transition={{ delay: 0.2, bounce: 0}}
				initial={{
					y: 100,
					opacity: 0,
				}}
				whileInView={{
					y: 0,
					opacity: 1,
				}}
				className="absolute bottom-0 aspect-square w-[80%] inline-block"
			>
				<Image
					src="/images/avatar.webp"
					fill={true}
					alt="Febin's avatar"
					quality={100}
					draggable={false}
					priority={true}
				/>
			</motion.div>
		</motion.div>
	);
}
