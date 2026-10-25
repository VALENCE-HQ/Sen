import type { Child } from "../../core/handle";
export interface MarqueeProps {
    children: Child[];
    direction: "left" | "right";
    duration: number;
    gap: number;
    pauseOnHover: boolean;
    label: string;
}
export declare const Marquee: import("../define").Component<MarqueeProps, {}, never>;
