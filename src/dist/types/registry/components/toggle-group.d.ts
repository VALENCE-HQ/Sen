export interface ToggleGroupItem {
    value: string;
    label: string;
    disabled?: boolean;
}
export type ToggleGroupValue = string | string[];
export interface ToggleGroupProps {
    items: ToggleGroupItem[];
    type: "single" | "multiple";
    value: ToggleGroupValue;
    variant: "default" | "outline";
    size: "default" | "sm" | "lg";
    disabled: boolean;
    orientation: "horizontal" | "vertical";
    rovingFocus: boolean;
}
export type ToggleGroupEvents = {
    Changed: [value: ToggleGroupValue];
};
export declare const ToggleGroup: import("../define").Component<ToggleGroupProps, ToggleGroupEvents, ToggleGroupValue>;
