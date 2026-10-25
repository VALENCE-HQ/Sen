import type { Child } from "../../core/handle";
export interface FieldProps {
    label: string;
    htmlFor: string;
    description: string;
    error: string;
    required: boolean;
    children: Child[];
}
export type FieldEvents = {};
export declare const Field: import("../define").Component<FieldProps, {}, never>;
