import type { Child } from "../../core/handle";
export interface BubbleProps {
    children: Child[];
    align: "start" | "end";
    variant: "default" | "muted" | "outline";
    grouped: boolean;
    reactions: string[];
}
export type BubbleEvents = {
    Reacted: [reaction: string];
};
export declare const Bubble: import("../define").Component<BubbleProps, BubbleEvents, never>;
