import type { Child } from "../../core/handle";
export interface TableProps {
    headers: string[];
    rows: Child[][];
    caption: string;
}
export declare const Table: import("../define").Component<TableProps, {}, never>;
