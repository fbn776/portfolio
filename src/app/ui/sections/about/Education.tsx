import EducationData from "@/app/data/about/EducationData";
import Timeline from "../../components/timeline/Timeline";
import ReadMore from "../../components/ReadMore";
import {motion} from "framer-motion";
import {fadeRightChildVariant} from "@data/framer-anims";

export default function Education() {
    return (
        <Timeline
            source={EducationData}
            elmMapper={(data) => {
                return (
                    <>
                        <motion.h1 transition={{type: "tween"}} variants={fadeRightChildVariant} initial="hidden"
                                   whileInView="show"
                                   className="text-xl mb-2 font-semibold">{data.institution}</motion.h1>
                        <motion.h2 transition={{type: "tween"}} variants={fadeRightChildVariant} initial="hidden"
                                   whileInView="show" className="font-semibold opacity-90"> {data.course}</motion.h2>
                        {data.description && (<ReadMore description={data.description}/>)}
                        {data.marks && (
                            <motion.div transition={{type: "tween"}} variants={fadeRightChildVariant} initial="hidden"
                                        whileInView="show" className="opacity-90 font-semibold">
                                {data.marks}
                            </motion.div>
                        )}
                    </>
                );
            }}
        />
    );
}
