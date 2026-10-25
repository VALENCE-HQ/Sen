export interface RadioGroupItem {
    value: string;
    label: string;
    description?: string;
    disabled?: boolean;
}
export interface RadioGroupProps {
    items: RadioGroupItem[];
    value: string;
    label: string;
    description: string;
    disabled: boolean;
    orientation: "horizontal" | "vertical";
    required: boolean;
}
export type RadioGroupEvents = {
    Changed: [value: string];
};
export declare const RadioGroup: import("../define").Component<RadioGroupProps, RadioGroupEvents, string>;
