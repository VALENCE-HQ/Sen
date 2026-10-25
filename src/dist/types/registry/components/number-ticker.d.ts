export interface NumberTickerProps {
    value: number;
    from: number;
    duration: number;
    decimals: number;
    locale: string;
    prefix: string;
    suffix: string;
    animateOnView: boolean;
}
export type NumberTickerEvents = {
    Completed: [value: number];
};
export declare const NumberTicker: import("../define").Component<NumberTickerProps, NumberTickerEvents, never>;
