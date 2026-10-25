export interface ChartDatum {
    label: string;
    value: number;
}
export interface ChartProps {
    title: string;
    data: ChartDatum[];
    type: "line" | "bar";
    height: number;
}
export declare const Chart: import("../define").Component<ChartProps, {}, never>;
