import type { SelectOption } from "./select";
export interface AutocompleteProps {
    value: string;
    label: string;
    description: string;
    placeholder: string;
    options: SelectOption[];
    emptyText: string;
    disabled: boolean;
    required: boolean;
}
export type AutocompleteEvents = {
    Changed: [value: string];
    Selected: [value: string];
};
export declare const Autocomplete: import("../define").Component<AutocompleteProps, AutocompleteEvents, string>;
