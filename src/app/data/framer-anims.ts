export const fadeRightChildVariant = {
    hidden: {x: -50, opacity: 0},
    show: {
        x: 0,
        opacity: 1,
    },
};

export const fadeLeftChildVariant = {
    hidden: {x: 50, opacity: 0},
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

export const fadeTopChildVariant = {
    hidden: {y: -50, opacity: 0},
    show: {
        y: 0,
        opacity: 1,
    },
};
