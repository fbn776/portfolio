import Image from "next/image";

export default function AvatarSVG() {
	return (
		<div className="avatar-cont max-w-[40%]">
			<Image
				src="/images/avatar.webp"
				width={400}
				height={400}
				alt="Febin's avatar"
				className="absolute bottom-0"
			/>
		</div>
	);
}
