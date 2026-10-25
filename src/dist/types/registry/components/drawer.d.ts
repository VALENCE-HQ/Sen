import type { Child } from "../../core/handle";
export interface DrawerProps {
    open: boolean;
    title: string;
    description: string;
    content: Child[];
    closeText: string;
}
export type DrawerEvents = {
    Changed: [open: boolean];
};
export declare const Drawer: import("..").OpenableComponent<DrawerProps, DrawerEvents>;
