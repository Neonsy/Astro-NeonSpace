import type { BounceOptions, TransformOptions, TransitionOptions } from '@/types/animation';

export const fadeInConfig = (options?: TransitionOptions) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: {
        duration: options?.duration ?? 0.3,
        delay: options?.delay ?? 0,
        ease: options?.ease ?? 'easeOut',
    },
});

export const slideInLeftConfig = (options?: TransformOptions) => ({
    initial: { opacity: 0, x: -(options?.distance ?? -5) },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: {
        duration: options?.duration ?? 0.3,
        delay: options?.delay ?? 0,
        ease: options?.ease ?? 'easeOut',
    },
});

export const fadeInThenBounceConfig = (options?: BounceOptions) => ({
    initial: { opacity: 0, x: -(options?.initialX ?? 18) },
    animate: {
        opacity: 1,
        x: 0,
        y: [options?.bounceHeight ?? 5, -(options?.bounceHeight ?? 5), options?.bounceHeight ?? 5],
    },
    transition: {
        opacity: { delay: options?.delay ?? 0.2 },
        x: { delay: options?.delay ?? 0.2 },
        y: {
            delay: options?.bounceDelay ?? 0.6,
            duration: options?.bounceDuration ?? 5,
            repeat: Infinity,
            ease: options?.ease ?? 'easeInOut',
            times: [0, 0.5, 1],
        },
    },
});
