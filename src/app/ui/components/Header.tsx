import { headerFont } from "../fonts";

export default function Header({ text }: { text: string }) {
	return <h1 className={`header`}>{text}</h1>;
}
