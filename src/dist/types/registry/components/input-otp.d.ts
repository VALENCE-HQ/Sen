export interface InputOTPProps {
    value: string;
    length: number;
    label: string;
    disabled: boolean;
    numeric: boolean;
    autoFocus: boolean;
    invalid: boolean;
    groupSize: number;
}
export type InputOTPEvents = {
    Changed: [value: string];
    Completed: [value: string];
};
export declare const InputOTP: import("../define").Component<InputOTPProps, InputOTPEvents, string>;
