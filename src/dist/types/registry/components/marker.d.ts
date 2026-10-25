export interface MarkerProps {
    text: string;
    variant: "default" | "info" | "success" | "warning" | "destructive";
    align: "left" | "center" | "right";
}
export declare const Marker: import("../define").Component<MarkerProps, {}, never>;
