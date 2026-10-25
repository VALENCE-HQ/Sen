export interface ColorPickerProps {
    label: string;
    description: string;
    value: string;
    disabled: boolean;
    showValue: boolean;
    flag: string;
    placeholder: string;
}
export type ColorPickerEvents = {
    Changed: [value: string];
};
export declare const ColorPicker: import("../define").Component<ColorPickerProps, ColorPickerEvents, string>;
