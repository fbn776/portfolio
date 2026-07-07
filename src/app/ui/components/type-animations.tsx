"use client";

import {TypeAnimation} from "react-type-animation";


export default function TypeAnimations({
    sequence, airaLabel
                                       }: {
    sequence: (string | number)[];
    airaLabel?: string;
}) {
    return <TypeAnimation
        sequence={sequence}
        aria-label={airaLabel}
        speed={25}
        repeat={Infinity}
        className="text-3xl max-sm:text-lg max-sm:opacity-80 max-sm:mt-[-18px]"
        preRenderFirstString={true}
    />
}