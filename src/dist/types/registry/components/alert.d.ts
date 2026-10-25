import type { Child } from "../../core/handle";
export interface AlertProps {
    title: string;
    description: string;
    content: Child[];
    variant: "default" | "destructive";
}
export declare const Alert: import("../define").Component<AlertProps, {}, never>;
