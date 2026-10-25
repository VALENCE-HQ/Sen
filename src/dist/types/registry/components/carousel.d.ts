import type { Child } from "../../core/handle";
export interface CarouselProps {
    items: Child[];
    index: number;
    label: string;
    orientation: "horizontal" | "vertical";
    loop: boolean;
}
export type CarouselEvents = {
    Changed: [index: number];
};
export declare const Carousel: import("../define").Component<CarouselProps, CarouselEvents, number>;
