export interface KeybindProps {
    label: string;
    description: string;
    value: string;
    disabled: boolean;
    preventDefault: boolean;
    flag: string;
}
export type KeybindEvents = {
    Changed: [value: string];
    Pressed: [];
};
export declare const Keybind: import("../define").Component<KeybindProps, KeybindEvents, string>;
