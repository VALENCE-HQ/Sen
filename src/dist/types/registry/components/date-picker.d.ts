export interface DatePickerProps {
    value: string;
    label: string;
    description: string;
    placeholder: string;
    minDate: string;
    maxDate: string;
    disabled: boolean;
    required: boolean;
    weekStartsOn: number;
}
export type DatePickerEvents = {
    Changed: [value: string];
};
export declare const DatePicker: import("../define").Component<DatePickerProps, DatePickerEvents, string>;
