import type { Child } from "../../core/handle";
export interface EmptyProps {
    title: string;
    description: string;
    children: Child[];
    icon: Child | null;
    action: Child | null;
}
export declare const Empty: import("../define").Component<EmptyProps, {}, never>;
