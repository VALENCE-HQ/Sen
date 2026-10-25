import type { Child } from "../../core/handle";
export interface TooltipProps {
    open: boolean;
    trigger: string;
    content: Child;
    side: "top" | "right" | "bottom" | "left";
    align: "start" | "center" | "end";
    sideOffset: number;
    delayDuration: number;
}
export type TooltipEvents = {
    Changed: [open: boolean];
};
export declare const Tooltip: import("..").OpenableComponent<TooltipProps, TooltipEvents>;
