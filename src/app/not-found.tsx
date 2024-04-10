import Link from "next/link";


export default function NotFound() {
	return (
		<main className="w-full h-full flex justify-center items-center text-white flex-col">
			<h1 className="text-4xl text-primary font-semibold max-sm:text-center max-sm:text-8xl">
				404 <span className="max-sm:hidden">-</span> <span className="max-sm:block max-sm:text-xl max-sm:text-white font-normal">Page Not Found</span>
			</h1>
			<Link
				href="/"
				className="flex gap-2 items-center mt-8 px-5 py-2 bg-primary rounded-md hover:scale-105 transition-transform"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M5 12l14 0" />
					<path d="M5 12l6 6" />
					<path d="M5 12l6 -6" />
				</svg>
				Go Home
			</Link>
		</main>
	);
}