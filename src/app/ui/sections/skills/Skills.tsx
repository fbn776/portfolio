"use client";

import Header from "../../components/Header";
import SkillsData from "@/app/data/skill/SkillsData";
import "./style.css";
import Image from "next/image";
import {motion} from "framer-motion";

export default function Skills() {
    return (
        <section className="main-section" id="skills">
            <Header text="Skills" className="text-6xl"/>

            <div className="w-full flex gap-4 items-stretch justify-stretch max-lg:flex-col">
                {SkillsData.map((category, i) => {
                    return (
                        <motion.div
                            className="h-full glass rounded p-4 flex flex-col gap-6"
                            key={i}
                            initial={{y: 100, opacity: 0}}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "tween",
                                    delay: i / 10
                                }
                            }}
                        >
                            <label
                                className="text-center text-dark dark:text-light font-semibold bg-primary bg-opacity-20 rounded p-2">
                                {category.name}
                            </label>
                            <div className="flex w-full flex-wrap gap-4 justify-center items-center">
                                {category.skills.map((skill, j) => {
                                    return (
                                        <motion.div
                                            key={j}
                                            className="card-flip bg-primary bg-opacity-10 p-4 rounded-md"
                                            data-name={skill.name}
                                            initial={{x: -30, opacity: 0}}
                                            whileInView={{
                                                x: 0,
                                                opacity: 1,
                                                transition: {
                                                    type: "tween",
                                                    delay: 0.2 + (i / 10) + (j / 20)
                                                }
                                            }}
                                        >
                                            <div className="w-[50px] h-[50px] relative">
                                                <Image fill={true} src={skill.src} alt={skill.name}/>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
