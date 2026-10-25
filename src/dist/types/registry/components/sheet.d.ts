import type { Child } from "../../core/handle";
export interface SheetProps {
    open: boolean;
    title: string;
    description: string;
    content: Child[];
    side: "top" | "right" | "bottom" | "left";
    closeText: string;
}
export type SheetEvents = {
    Changed: [open: boolean];
};
export declare const Sheet: import("..").OpenableComponent<SheetProps, SheetEvents>;
