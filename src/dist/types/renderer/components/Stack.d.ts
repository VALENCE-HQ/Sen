import type { StackEvents, StackProps } from "../../registry/components/stack";
import { type ComponentNode } from "../view";
export declare function StackView({ node }: {
    node: ComponentNode<StackProps, StackEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
