import ExperienceData from "@/app/data/about/ExperienceData";
import Timeline from "../../components/timeline/Timeline";
import ReadMore from "../../components/ReadMore";
import {motion} from "framer-motion";
import {fadeRightChildVariant, staggerParentVariant} from "@data/framer-anims";

export default function Experience() {
    return (
        <Timeline
            source={ExperienceData}
            elmMapper={(data, i) => {
                return (
                    <>
                        <motion.h1 className="text-xl mb-2 font-semibold"
                                   transition={{type: "tween"}}
                                   variants={fadeRightChildVariant}
                                   initial="hidden"
                                   whileInView="show"
                        >{data.position}</motion.h1>
                        <motion.h2 className="font-semibold"
                                   transition={{type: "tween"}}
                                   variants={fadeRightChildVariant} initial="hidden"
                                   whileInView="show">{data.institute}</motion.h2>

                        {data.description && <ReadMore description={data.description}/>}
                        {data.skills && (
                            <motion.div className="flex gap-3 mt-2 flex-wrap skill-bubbles" variants={staggerParentVariant}>
                                {data.skills.map((text, i) => {
                                    return (
                                        <motion.span
                                            initial={{y: 20, opacity: 0}}
                                            whileInView={{
                                                y: 0,
                                                opacity: 1,
                                                transition: {
                                                    type: "tween",
                                                    delay: i / 10
                                                }
                                            }}
                                            className="px-4 bg-primary text-light bg-opacity-60 text-sm py-1 rounded-full min-w-[50px] text-center"
                                            key={i}
                                        >
                                            {text}
                                        </motion.span>
                                    );
                                })}
                            </motion.div>
                        )}
                    </>
                );
            }}
        />
    );
}
