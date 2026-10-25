import type { Child } from "../../core/handle";
export interface AnimationProps {
    front: Child[];
    back: Child[];
    label: string;
    flipped: boolean;
    disabled: boolean;
}
export type AnimationEvents = {
    Changed: [flipped: boolean];
};
export declare const Animation: import("../define").Component<AnimationProps, AnimationEvents, boolean>;
