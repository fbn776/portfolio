import Navbar from "@/app/ui/home/Navbar";
import clsx from "clsx";
import {inter, teko} from "@/app/ui/fonts";

export default function Header() {
    return <>
        <Navbar/>
        <div className={`${inter.className} mt-10 text-white text-8xl leading-tight tracking-wide`}>
            <h1>Hello;</h1>
            <h1>I&apos;m <span className={clsx(teko.className, "text-primary text-9xl")}>Febin</span></h1>
        </div>
    </>
}