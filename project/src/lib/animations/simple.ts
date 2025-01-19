export const fadeInConfig = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: {
        duration: 0.3,
    },
};

export const fadeInUpConfig = {
    initial: { opacity: 0, y: 9 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
        duration: 0.3,
    },
};

export const slideInLeftConfig = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: {
        duration: 0.3,
    },
};

export const slideInRightConfig = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: {
        duration: 0.3,
    },
};

export const fadeInThenBounceConfig = {
    initial: { opacity: 0, x: -18 },
    animate: {
        opacity: 1,
        x: 0,
        y: [5, -5, 5],
    },
    transition: {
        opacity: { delay: 0.2 },
        x: { delay: 0.2 },
        y: {
            delay: 0.6,
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
        },
    },
};
