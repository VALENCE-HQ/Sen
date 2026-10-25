export interface SliderProps {
    label: string;
    description: string;
    min: number;
    max: number;
    step: number;
    value: number;
    showValue: boolean;
    disabled: boolean;
    flag: string;
}
export type SliderEvents = {
    /** Fires continuously while dragging. */
    Changed: [value: number];
    /** Fires once when the user lets go. */
    Committed: [value: number];
};
export declare const Slider: import("../define").Component<SliderProps, SliderEvents, number>;
