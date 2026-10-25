import type { BubbleEvents, BubbleProps } from "../../registry/components/bubble";
import { type ComponentNode } from "../view";
export declare function BubbleView({ node }: {
    node: ComponentNode<BubbleProps, BubbleEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
