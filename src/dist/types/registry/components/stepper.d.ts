import type { Child } from "../../core/handle";
export interface StepperStep {
    id: string;
    title: string;
    description?: string;
    content?: Child[];
}
export interface StepperProps {
    steps: StepperStep[];
    value: number;
    orientation: "horizontal" | "vertical";
    allowJump: boolean;
    nextText: string;
    backText: string;
    finishText: string;
}
export type StepperEvents = {
    Changed: [step: number];
    Completed: [];
};
export declare const Stepper: import("../define").Component<StepperProps, StepperEvents, number>;
