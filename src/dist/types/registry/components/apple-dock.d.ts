import type { Child } from "../../core/handle";
export interface DockItem {
    value: string;
    label: string;
    icon: Child[];
    disabled?: boolean;
}
export interface AppleDockProps {
    items: DockItem[];
    value: string;
    orientation: "horizontal" | "vertical";
    label: string;
}
export type AppleDockEvents = {
    Changed: [value: string];
};
export declare const AppleDock: import("../define").Component<AppleDockProps, AppleDockEvents, string>;
