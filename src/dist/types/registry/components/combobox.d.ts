import type { SelectOption } from "./select";
export interface ComboboxProps {
    label: string;
    description: string;
    options: SelectOption[];
    value: string;
    placeholder: string;
    searchPlaceholder: string;
    emptyText: string;
    disabled: boolean;
    required: boolean;
}
export type ComboboxEvents = {
    Changed: [value: string];
};
export declare const Combobox: import("../define").Component<ComboboxProps, ComboboxEvents, string>;
