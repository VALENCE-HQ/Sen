import type { ControlSize } from "../../core/types";
import type { SelectOption } from "./select";
export interface NativeSelectProps {
    label: string;
    description: string;
    options: SelectOption[];
    value: string;
    placeholder: string;
    disabled: boolean;
    required: boolean;
    size: ControlSize | "inherit";
}
export type NativeSelectEvents = {
    Changed: [value: string];
};
export declare const NativeSelect: import("../define").Component<NativeSelectProps, NativeSelectEvents, string>;
