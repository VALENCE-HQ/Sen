import type { ControlSize } from "../../core/types";
export type SelectOption = string | {
    label: string;
    value: string;
};
export interface SelectProps {
    label: string;
    description: string;
    options: SelectOption[];
    /** The selected option's value. "" shows the placeholder. */
    value: string;
    placeholder: string;
    disabled: boolean;
    /** A preset scale, numeric height in px, or "inherit" to follow Sen.Theme(). */
    size: ControlSize | "inherit";
    flag: string;
}
export type SelectEvents = {
    Changed: [value: string];
};
export declare const Select: import("../define").Component<SelectProps, SelectEvents, string>;
