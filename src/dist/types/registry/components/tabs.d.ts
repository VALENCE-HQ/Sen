import type { Child } from "../../core/handle";
export interface TabItem {
    value: string;
    label: string;
    content: Child;
    disabled?: boolean;
}
export interface TabsProps {
    items: TabItem[];
    value: string;
    label: string;
    orientation: "horizontal" | "vertical";
    activationMode: "automatic" | "manual";
    dir: "ltr" | "rtl";
}
export type TabsEvents = {
    Changed: [value: string];
};
export declare const Tabs: import("../define").Component<TabsProps, TabsEvents, string>;
