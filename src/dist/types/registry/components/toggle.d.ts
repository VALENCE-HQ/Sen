export interface ToggleProps {
    text: string;
    pressed: boolean;
    variant: "default" | "outline";
    size: "default" | "sm" | "lg";
    disabled: boolean;
}
export type ToggleEvents = {
    Changed: [pressed: boolean];
};
export declare const Toggle: import("../define").Component<ToggleProps, ToggleEvents, boolean>;
