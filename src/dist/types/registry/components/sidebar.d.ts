import type { Child } from "../../core/handle";
export interface SidebarProps {
    children: Child[];
    collapsed: boolean;
    collapsible: boolean;
    label: string;
}
export type SidebarEvents = {
    Changed: [collapsed: boolean];
};
export declare const Sidebar: import("../define").Component<SidebarProps, SidebarEvents, boolean>;
