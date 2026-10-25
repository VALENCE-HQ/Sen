import type { MenuEntry } from "./menu-entry";
export type { MenuEntry } from "./menu-entry";
export interface MenubarGroup {
    label: string;
    items: MenuEntry[];
}
export interface MenubarProps {
    groups: MenubarGroup[];
}
export type MenubarEvents = {
    Selected: [value: string];
};
export declare const Menubar: import("../define").Component<MenubarProps, MenubarEvents, never>;
