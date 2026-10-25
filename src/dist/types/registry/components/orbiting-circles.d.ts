import type { Child } from "../../core/handle";
export interface OrbitingCirclesProps {
    children: Child[];
    center: Child[];
    radius: number;
    size: number;
    duration: number;
    reverse: boolean;
    pauseOnHover: boolean;
    label: string;
}
export declare const OrbitingCircles: import("../define").Component<OrbitingCirclesProps, {}, never>;
