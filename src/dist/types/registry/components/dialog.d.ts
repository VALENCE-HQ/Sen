import type { Child } from "../../core/handle";
export interface DialogProps {
    open: boolean;
    title: string;
    description: string;
    content: Child[];
    closeText: string;
}
export type DialogEvents = {
    Changed: [open: boolean];
};
export declare const Dialog: import("..").OpenableComponent<DialogProps, DialogEvents>;
