import type { Child } from "../../core/handle";
export interface SortableItem {
    id: string;
    label: string;
    content?: Child[];
    disabled?: boolean;
}
export interface SortableProps {
    items: SortableItem[];
    label: string;
    orientation: "vertical" | "horizontal";
}
export type SortableEvents = {
    Changed: [items: SortableItem[]];
};
export declare const Sortable: import("../define").Component<SortableProps, SortableEvents, never>;
