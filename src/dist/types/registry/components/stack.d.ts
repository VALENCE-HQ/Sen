import type { Child } from "../../core/handle";
export interface StackProps {
    direction: "column" | "row";
    /** In spacing units: 2 means 2 x Sen.Theme({ spacing }). */
    gap: number;
    align: "start" | "center" | "end" | "stretch";
    justify: "start" | "center" | "end" | "between";
    wrap: boolean;
    padding: number;
    children: Child[];
}
export type StackEvents = {};
export declare const Stack: import("../define").Component<StackProps, StackEvents, never>;
