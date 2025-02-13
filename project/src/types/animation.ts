export type TransitionOptions = {
    duration?: number;
    delay?: number;
    ease?: string;
};

export type TransformOptions = TransitionOptions & {
    distance?: number;
};

export type BounceOptions = TransitionOptions & {
    initialX?: number;
    bounceHeight?: number;
    bounceDuration?: number;
    bounceDelay?: number;
};
