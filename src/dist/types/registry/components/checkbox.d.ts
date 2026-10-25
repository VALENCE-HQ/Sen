export interface CheckboxProps {
    label: string;
    description: string;
    value: boolean;
    disabled: boolean;
    flag: string;
}
export type CheckboxEvents = {
    Changed: [value: boolean];
    Toggled: [checked: boolean];
};
export declare const Checkbox: import("../define").Component<CheckboxProps, CheckboxEvents, boolean>;
