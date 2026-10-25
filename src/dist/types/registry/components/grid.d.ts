import type { Child } from "../../core/handle";
export interface GridProps {
    columns: number;
    gap: number;
    padding: number;
    children: Child[];
}
export type GridEvents = {};
export declare const Grid: import("../define").Component<GridProps, GridEvents, never>;
