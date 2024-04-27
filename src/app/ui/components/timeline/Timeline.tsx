"use client";

import {motion} from "framer-motion";
import "./style.css";
import {staggerParentVariant} from "@data/framer-anims";

interface TimelineData {
    key: string;
}

interface Prop<E extends TimelineData> {
    align?: 'left' | 'right',
    source: E[],
    elmMapper: (data: E, i: number) => JSX.Element;
}


export default function Timeline<E extends TimelineData>(props: Prop<E>) {
    return (
        <motion.div className="timeline" data-align={props.align ?? "left"} variants={staggerParentVariant}
        >
            {props.source.map((data, i) => {
                return (
                    <div key={i} className="container" data-title={data.key}>
                        <div className="content">{props.elmMapper(data, i)}</div>
                    </div>
                );
            })}
        </motion.div>
    );
}