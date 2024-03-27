export default function Header({
	text,
	textSize = "text-4xl",
}: {
	text: string;
	textSize?: string;
}) {
	return <h1 className={`header ${textSize}`}>{text}</h1>;
}
