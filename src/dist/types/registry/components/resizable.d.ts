import type { Child } from "../../core/handle";
export interface ResizableProps {
    children: Child[];
    direction: "horizontal" | "vertical";
    defaultSizes: number[];
    minSize: number;
}
export declare const Resizable: import("../define").Component<ResizableProps, {}, never>;
