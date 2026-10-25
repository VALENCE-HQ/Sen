export interface RatingProps {
    value: number;
    max: number;
    step: number;
    label: string;
    disabled: boolean;
    readOnly: boolean;
    allowClear: boolean;
}
export type RatingEvents = {
    Changed: [value: number];
};
export declare const Rating: import("../define").Component<RatingProps, RatingEvents, number>;
