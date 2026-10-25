export interface TextareaProps {
    label: string;
    description: string;
    value: string;
    placeholder: string;
    rows: number;
    disabled: boolean;
    required: boolean;
}
export type TextareaEvents = {
    Changed: [value: string];
    Focused: [isFocused: boolean];
};
export declare const Textarea: import("../define").Component<TextareaProps, TextareaEvents, string>;
