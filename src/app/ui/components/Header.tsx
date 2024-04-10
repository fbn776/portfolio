export default function Header({
	text,
	className = "text-4xl",
}: {
	text: string;
	className?: string;
}) {
	return <h1 className={`header ${className}`}>{text}</h1>;
}
