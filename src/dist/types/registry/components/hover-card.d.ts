import type { Child } from "../../core/handle";
export interface HoverCardProps {
    open: boolean;
    trigger: string;
    content: Child[];
    side: "top" | "right" | "bottom" | "left";
    openDelay: number;
    closeDelay: number;
}
export type HoverCardEvents = {
    Changed: [open: boolean];
};
export declare const HoverCard: import("..").OpenableComponent<HoverCardProps, HoverCardEvents>;
