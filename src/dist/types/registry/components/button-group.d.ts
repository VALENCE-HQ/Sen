import type { Child } from "../../core/handle";
export interface ButtonGroupProps {
    children: Child[];
    orientation: "horizontal" | "vertical";
}
export declare const ButtonGroup: import("../define").Component<ButtonGroupProps, {}, never>;
