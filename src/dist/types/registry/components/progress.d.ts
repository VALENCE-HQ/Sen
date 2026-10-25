export interface ProgressProps {
    label: string;
    /** 0 to 100. */
    value: number;
    showValue: boolean;
}
export type ProgressEvents = {};
export declare const Progress: import("../define").Component<ProgressProps, ProgressEvents, number>;
