import type { Child } from "../../core/handle";
export interface ItemProps {
    title: string;
    description: string;
    media: string;
    children: Child[];
    variant: "default" | "outline" | "muted";
}
export declare const Item: import("../define").Component<ItemProps, {}, never>;
