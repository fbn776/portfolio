import { secondaryFont } from "../fonts";

export default function Header({ text }: { text: string }) {
	return <h1 className={`${secondaryFont.className} header`}>{text}</h1>;
}
