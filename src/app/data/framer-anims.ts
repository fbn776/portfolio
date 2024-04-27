export const fadeRightChildVariant = {
    hidden: {x: -50, opacity: 0},
    show: {
        x: 0,
        opacity: 1,
    },
};

export const staggerParentVariant = {
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export const fadeBottomChildVariant = {
    hidden: {y: -50, opacity: 0},
    show: {
        y: 0,
        opacity: 1,
    },
};
