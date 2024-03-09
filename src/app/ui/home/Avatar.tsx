import Image from "next/image";

export default function AvatarSVG() {
	return (
		<div className="avatar-cont ">
			<div className="absolute bottom-0 aspect-square w-[80%] inline-block">
				<Image
					src="/images/avatar.webp"
					fill={true}
					alt="Febin's avatar"
					draggable={false}
					priority={true}
				/>
			</div>
		</div>
	);
}
