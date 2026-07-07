import {headerFont, textFont} from "@/app/ui/fonts";
import Avatar from "./Avatar";
import "./style.css";
import ResumeBtn from "./resume-btn";
import TypeAnimations from "@/app/ui/components/type-animations";

export default function HeroSection() {
    return (
        <section id="home" className="main-section min-h-[100dvh]">
            <div
                className="flex w-full pt-28 max-sm:pt-24 justify-between lg:items-center max-lg:justify-end max-lg:gap-16 max-lg:flex-col-reverse max-lg:flex max-lg:items-center max-sm:items-start select-none max-sm:gap-5">

                <div
                    className={`${textFont.className} text-dark dark:text-light tracking-wide flex flex-col justify-start items-start`}
                >
                    <div className="text-8xl max-sm:text-5xl">
                        <span className="block mb-5 max-sm:inline">Hello,</span>
                        <span className="block mt-3">I&apos;m{" "}
                            <span
                                className={`${headerFont.className} text-primary text-9xl max-sm:text-7xl tracking-wide mt-20`}>
                                Febin
                            </span>
                        </span>
                    </div>
                    <br/>
                    <TypeAnimations
                        sequence={[
                            ">",
                            "> Backend Engineer",
                            1500,
                            "> Problem Solver",
                            1500,
                            "> Building Scalable Software",
                            1500,
                            "> Open Source Enthusiast",
                            1500,
                            "> Lifelong Learner",
                            1500,
                            "> Full-Stack Engineer",
                            1500,
                            "> Turning Ideas into Products",
                            1500,
                        ]}
                        airaLabel="Full-Stack Engineer"
                    />
                </div>
                <Avatar/>
            </div>
            <ResumeBtn/>
        </section>
    );
}