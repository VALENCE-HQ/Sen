import type { Child } from "../../core/handle";
export interface PopoverProps {
    open: boolean;
    trigger: string;
    content: Child[];
    side: "top" | "right" | "bottom" | "left";
    align: "start" | "center" | "end";
    sideOffset: number;
    alignOffset: number;
    modal: boolean;
}
export type PopoverEvents = {
    Changed: [open: boolean];
};
export declare const Popover: import("..").OpenableComponent<PopoverProps, PopoverEvents>;
