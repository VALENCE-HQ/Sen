import type { Child } from "../../core/handle";
export interface CollapsibleProps {
    open: boolean;
    disabled: boolean;
    trigger: string;
    content: Child[];
}
export type CollapsibleEvents = {
    Changed: [open: boolean];
};
export declare const Collapsible: import("..").OpenableComponent<CollapsibleProps, CollapsibleEvents>;
