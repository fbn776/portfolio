export default function Header({
	text,
	className = "text-4xl",
	id,
}: {
	text: string;
	className?: string;
	id?: string;
}) {
	return <h2 className={`header ${className}`} id={id || ''}>{text}</h2>;
}
