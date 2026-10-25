import type { Child } from "../../core/handle";
export interface DirectionProps {
    dir: "ltr" | "rtl";
    children: Child[];
}
export declare const Direction: import("../define").Component<DirectionProps, {}, never>;
