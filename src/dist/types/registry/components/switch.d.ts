export interface SwitchProps {
    label: string;
    description: string;
    value: boolean;
    disabled: boolean;
    flag: string;
}
export type SwitchEvents = {
    Changed: [value: boolean];
    Toggled: [on: boolean];
};
export declare const Switch: import("../define").Component<SwitchProps, SwitchEvents, boolean>;
