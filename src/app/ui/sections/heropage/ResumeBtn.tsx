import Resume from "@/app/data/Resume";
import { IconDownload } from "@tabler/icons-react";
import Link from "next/link";

function ResumeIc() {
	return (
		<svg
			width="18"
			height="18"
			version="1.1"
			viewBox="0 0 682.67 682.67"
			xmlns="http://www.w3.org/2000/svg"
			className="stroke-light opacity-80"
		>
			<defs>
				<clipPath id="c">
					<path d="M0 512h512V0H0Z" data-original="#000000" />
				</clipPath>
			</defs>
			<mask id="d">
				<rect width="100%" height="100%" fill="#fff" data-original="#ffffff" />
			</mask>
			<g mask="url(#d)">
				<g
					transform="matrix(1.3333 0 0 -1.3333 0 682.67)"
					clipPath="url(#c)"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					strokeWidth="47"
				>
					<path
						transform="translate(438.91 239)"
						d="m0 0-0.024 193c0 33.137-26.863 60-60 60h-245.89c-33.137 0-60-26.863-60-60v-352c0-33.137 26.863-60 60-60l186.94 0.056 119 118.89"
					/>
					<path transform="translate(153 174)" d="m0 0 118.944.056" />
					<path transform="translate(153 101)" d="m0 0 91.944.056" />
					<path
						transform="translate(319.94 20.056)"
						d="m0 0v68.889c0 27.614 22.386 50 50 50h69"
					/>
					<path
						transform="translate(212 373)"
						d="M0 0c0 23.748 19.252 43 43 43S86 23.748 86 0 66.748-43 43-43 0-23.748 0 0Z"
					/>
					<path
						transform="translate(318.81 252)"
						d="M0 0c8.393 0 14.613 7.744 12.902 15.979C5.545 51.394-25.772 78-63.29 78h-1.047c-37.518 0-68.835-26.606-76.192-62.021C-142.24 7.744-136.02 0-127.627 0Z"
					/>
				</g>
			</g>
		</svg>
	);
}

export default function ResumeBtn() {
	return (
		<div className="mt-8 flex max-lg:justify-center max-sm:justify-start items-center gap-4 text-light resume-btn-cont relative">
			<Link
				href={Resume.driveLink}
				className="px-5 py-2 bg-primary rounded-full flex items-center gap-2 w-fit relative z-10 resume-link"
			>
				See my Resume
				<ResumeIc />
			</Link>

			<a href={Resume.fileLink} download className="resume-download">
				<IconDownload size="20"/>
			</a>
		</div>
	);
}
