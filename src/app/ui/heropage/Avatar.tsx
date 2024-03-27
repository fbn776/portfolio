import Image from "next/image";
import "./style.css";


export default function Avatar() {
	return (
		<div className="avatar-cont">
			<div className="absolute bottom-0 aspect-square w-[80%] inline-block">
				<Image
					src="/images/avatar.webp"
					fill={true}
					alt="Febin's avatar"
					quality={100}
					draggable={false}
					priority={true}
				/>
			</div>
		</div>
	);
}
