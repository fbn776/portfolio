import Link from "next/link";
import {IconMoonFilled, IconSunFilled} from "@tabler/icons-react";
import {inter, teko} from "@/app/ui/fonts";

//TODO do this;
export default function Navbar() {
    let theme = "dark";

    return <>
        <nav className={`${inter.className} w-full text-white flex justify-between py-10 items-center`}>
            <h1 className={`${teko.className} text-2xl tracking-wide text-primary`}>FBN776</h1>
            <section className="flex gap-8">
                <Link draggable="false" href="#about">About</Link>
                <Link draggable="false" href="#skills">Skills</Link>
                <Link draggable="false" href="#projects">Projects</Link>
                <Link draggable="false" href="#contact">Contact</Link>
                { theme === "light" ? <IconMoonFilled/> : <IconSunFilled/> }
            </section>
        </nav>
    </>
}