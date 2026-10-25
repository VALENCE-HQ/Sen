import type { CardEvents, CardProps } from "../../registry/components/card";
import { type ComponentNode } from "../view";
export declare function CardView({ node }: {
    node: ComponentNode<CardProps, CardEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
