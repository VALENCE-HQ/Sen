export interface ToastProps {
    open: boolean;
    title: string;
    description: string;
    variant: "default" | "destructive";
    duration: number;
}
export type ToastEvents = {
    Changed: [open: boolean];
    Dismissed: [];
};
export declare const Toast: import("..").OpenableComponent<ToastProps, ToastEvents>;
