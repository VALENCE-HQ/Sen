export interface TextProps {
    text: string;
    size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    weight: "normal" | "medium" | "bold";
    color: "default" | "muted" | "primary" | "destructive";
    font: "sans" | "mono";
    align: "left" | "center" | "right";
}
export type TextEvents = {};
export declare const Text: import("../define").Component<TextProps, TextEvents, string>;
