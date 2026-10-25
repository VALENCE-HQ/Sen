import type { Child } from "../../core/handle";
export interface ScrollAreaProps {
    children: Child[];
    maxHeight: number;
    axis: "vertical" | "horizontal" | "both";
    label: string;
}
export declare const ScrollArea: import("../define").Component<ScrollAreaProps, {}, never>;
