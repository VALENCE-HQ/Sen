export type InputMaskKind = "numeric" | "alphanumeric" | "any";
export interface InputMaskProps {
    value: string;
    label: string;
    description: string;
    mask: string;
    placeholder: string;
    kind: InputMaskKind;
    disabled: boolean;
    required: boolean;
}
export type InputMaskEvents = {
    Changed: [value: string];
    Submitted: [value: string];
};
export declare const InputMask: import("../define").Component<InputMaskProps, InputMaskEvents, string>;
