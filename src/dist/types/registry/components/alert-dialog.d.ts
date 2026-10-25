import type { Child } from "../../core/handle";
export interface AlertDialogProps {
    open: boolean;
    title: string;
    description: string;
    content: Child[];
    actionText: string;
    cancelText: string;
}
export type AlertDialogEvents = {
    Changed: [open: boolean];
    Confirmed: [];
};
export declare const AlertDialog: import("..").OpenableComponent<AlertDialogProps, AlertDialogEvents>;
