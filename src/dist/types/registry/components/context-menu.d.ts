import type { Child } from "../../core/handle";
import type { MenuEntry } from "./menu-entry";
export type { MenuEntry } from "./menu-entry";
export interface ContextMenuProps {
    open: boolean;
    children: Child[];
    items: MenuEntry[];
}
export type ContextMenuEvents = {
    Changed: [open: boolean];
    Selected: [value: string];
};
export declare const ContextMenu: import("..").OpenableComponent<ContextMenuProps, ContextMenuEvents>;
