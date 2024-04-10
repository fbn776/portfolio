export default function Header({
	text,
	className = "text-4xl",
	id,
}: {
	text: string;
	className?: string;
	id?: string;
}) {
	return <h1 className={`header ${className}`} id={id || ''}>{text}</h1>;
}
