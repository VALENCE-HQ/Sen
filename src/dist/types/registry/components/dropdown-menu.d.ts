import type { MenuEntry } from "./menu-entry";
export type { MenuEntry } from "./menu-entry";
export interface DropdownMenuProps {
    open: boolean;
    trigger: string;
    items: MenuEntry[];
    side: "top" | "right" | "bottom" | "left";
}
export type DropdownMenuEvents = {
    Changed: [open: boolean];
    Selected: [value: string];
};
export declare const DropdownMenu: import("..").OpenableComponent<DropdownMenuProps, DropdownMenuEvents>;
