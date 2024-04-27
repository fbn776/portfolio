"use client";

import {IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX,} from "@tabler/icons-react";
import Header from "../../components/Header";
import {textFont} from "../../fonts";
import Image from "next/image";
import Education from "./Education";
import Experience from "./Experience";
import MyLinks from "@/app/data/Links";
import {motion} from "framer-motion";

const parentVariant = {
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const childVariant = {
    hidden: {x: 50, opacity: 0},
    show: {
        x: 0,
        opacity: 1,
    },
};


export default function About() {
    return (
        <section id="about" className="main-section">
            <Header text="About" className="text-6xl"/>
            <br/>
            <div className="flex gap-20 max-lg:gap-10 max-lg:flex-col">
                <motion.div
                    transition={{type: "tween"}}
                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    className="blob-cont blob-anim-2 relative flex justify-center items-center min-w-[100%] lg:self-center lg:min-w-[450px] lg:max-h-[500px] aspect-square">
                    <motion.div
                        initial={{opacity: 0, y: 100}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{delay: 0.2, type: "tween"}}
                        className="absolute bottom-0 aspect-square w-[80%] inline-block">
                        <Image
                            src="/images/about.webp"
                            fill={true}
                            alt="About side image"
                            quality={100}
                            draggable={false}
                            priority={true}
                        />
                    </motion.div>
                </motion.div>
                <motion.div
                    className="flex flex-col justify-between text-dark dark:text-light"
                    variants={parentVariant}
                >
                    <div className={`${textFont.className} text-dark dark:text-light`}>
                        <motion.p transition={{type: "tween"}} variants={childVariant} initial="hidden"
                                  whileInView="show">
                            Hello there! My name is{" "}
                            <span className="text-primary">Febin Nelson P</span>. I&apos;m
                            currently a second year student pursuing Bachelor of
                            Technology(BTech) in Computer Science and Engineering at Rajiv
                            Gandhi Institute of Technology (RIT) Kottayam.
                            <br/>
                            <br/>
                        </motion.p>
                        <motion.p transition={{type: "tween"}} variants={childVariant} initial="hidden"
                                  whileInView="show">
                            I am a passionate and dedicated developer and an aspiring software
                            engineer with a strong interest in innovations and solving problems.
                            I&apos;m experienced in web technologies, software development, and project management. I am
                            always looking for opportunities to expand my skills and
                            knowledge. <br/>I&apos;m experienced in working with
                            various technologies and tools like{" "}
                            <span className="text-primary">
								React, Node.js, Express.js, MongoDB, MySQL, Git, and more.
							</span>
                            <br/>
                            <br/>
                        </motion.p>
                        <motion.p transition={{type: "tween"}} className="max-sm:hidden" variants={childVariant}
                                  initial="hidden" whileInView="show">
                            I have worked on various projects and initiatives, and I have
                            excelled academically. I am always looking for opportunities to
                            learn and grow, and I am excited about what the future holds.
                        </motion.p>
                    </div>

                    <div className="flex justify-between items-center mt-5">
                        <div className="flex gap-5 max-sm:gap-3">
                            <motion.a
                                transition={{type: "tween"}}
                                variants={childVariant
                            } initial="hidden"
                                whileInView="show"
                                href={MyLinks.linkedin}
                                aria-label="See my linkedin profile"
                            >
                                <IconBrandLinkedin className="icon-link"/>
                            </motion.a>
                            <motion.a
                                transition={{type: "tween"}}
                                variants={childVariant
                            } initial="hidden"
                                whileInView="show"
                                href={MyLinks.github} aria-label="See my github profile">
                                <IconBrandGithub className="icon-link"/>
                            </motion.a>
                            <motion.a
                                transition={{type: "tween"}}
                                variants={childVariant
                            } initial="hidden"
                                whileInView="show"
                                href={MyLinks.twitter} aria-label="See my twitter(now X) profile">
                                <IconBrandX className="icon-link"/>
                            </motion.a>
                            <motion.a
                                transition={{type: "tween"}}
                                variants={childVariant
                            } initial="hidden"
                                whileInView="show"
                                href={MyLinks.instagram} aria-label="See my instagram profile">
                                <IconBrandInstagram className="icon-link"/>
                            </motion.a>
                        </div>
                        <motion.a
                            transition={{type: "tween"}}
                            variants={childVariant} initial="hidden"
                            whileInView="show"
                            href="#education"
                            className="bg-primary rounded-lg px-5 py-3 max-sm:py-2 text-light"
                            aria-label="Read about my education"
                        >
                            Read More
                        </motion.a>
                    </div>
                </motion.div>
            </div>
            <br/>

            <Header text="Education" id="education"/>
            <Education/>
            <br/>

            <Header text="Experience"/>
            <Experience/>
            <br/>
            <br/>
        </section>
    );
}
