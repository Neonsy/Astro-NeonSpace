// Define a common interface for transition options
export interface TransitionOptions {
    duration?: number;
    delay?: number;
    ease?: string;
}

export interface TransformOptions extends TransitionOptions {
    distance?: number;
}

export interface BounceOptions extends TransitionOptions {
    initialX?: number;
    bounceHeight?: number;
    bounceDuration?: number;
    bounceDelay?: number;
}
