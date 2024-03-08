import Link from "next/link";
import {IconMoonFilled} from "@tabler/icons-react";
import {inter} from "@/app/ui/fonts";

//TODO do this;
export default function Navbar() {
    return <>
        <nav className={`${inter.className} w-full text-white flex justify-between py-10 items-center`}>
            <h1 className="text-2xl tracking-wide">FBN776</h1>
            <section className="flex gap-8">
                <Link draggable="false" href="#about">About</Link>
                <Link draggable="false" href="#skills">Skills</Link>
                <Link draggable="false" href="#projects">Projects</Link>
                <Link draggable="false" href="#contact">Contact</Link>
                <IconMoonFilled/>
            </section>
        </nav>
    </>
}