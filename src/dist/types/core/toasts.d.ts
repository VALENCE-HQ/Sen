export type ToastVariant = "default" | "success" | "destructive";
export interface NotifyOptions {
    title?: string;
    content?: string;
    /** Seconds on screen. 0 keeps it until dismissed. Default 4. */
    duration?: number;
    variant?: ToastVariant;
}
export interface Toast {
    id: number;
    title: string;
    content: string;
    variant: ToastVariant;
}
export interface NotifyHandle {
    Dismiss(): void;
}
export declare const toastStore: {
    subscribe(fn: () => void): () => void;
    /** Stable between changes, as useSyncExternalStore requires. */
    getSnapshot: () => Toast[];
    dismiss(id: number): void;
};
export declare function pushToast(opts: NotifyOptions): NotifyHandle;
