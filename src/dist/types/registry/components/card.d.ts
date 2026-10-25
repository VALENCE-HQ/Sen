import type { Child } from "../../core/handle";
export interface CardProps {
    title: string;
    description: string;
    children: Child[];
    footer: Child | null;
    /** In spacing units. */
    padding: number;
}
export type CardEvents = {};
export declare const Card: import("../define").Component<CardProps, CardEvents, never>;
