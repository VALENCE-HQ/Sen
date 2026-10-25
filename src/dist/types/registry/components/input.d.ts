import type { ControlSize } from "../../core/types";
export interface InputProps {
    label: string;
    description: string;
    placeholder: string;
    value: string;
    type: "text" | "password" | "number" | "email" | "search";
    disabled: boolean;
    /** A preset scale, numeric height in px, or "inherit" to follow Sen.Theme(). */
    size: ControlSize | "inherit";
    /** Name for Sen.Flags and SaveConfig. */
    flag: string;
}
export type InputEvents = {
    Changed: [value: string];
    Submitted: [value: string];
    Focused: [isFocused: boolean];
};
export declare const Input: import("../define").Component<InputProps, InputEvents, string>;
