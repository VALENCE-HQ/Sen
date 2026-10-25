import type { Child } from "../../core/handle";
export interface ShineBorderProps {
    children: Child[];
    color: string;
    duration: number;
    borderWidth: number;
}
export declare const ShineBorder: import("../define").Component<ShineBorderProps, {}, never>;
