export type DotShape = "circle" | "square" | "diamond" | "triangle" | "flower" | "teardrop";
export interface DotsProps {
    size: number;
    color: string;
    shape: DotShape;
    label: string;
    followCursor: boolean;
}
export declare const Dots: import("../define").Component<DotsProps, {}, never>;
