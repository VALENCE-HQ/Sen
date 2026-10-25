import type { Child } from "../../core/handle";
export interface AnimatedListProps {
    children: Child[];
    stagger: number;
    duration: number;
    startDelay: number;
    ordered: boolean;
}
export declare const AnimatedList: import("../define").Component<AnimatedListProps, {}, never>;
