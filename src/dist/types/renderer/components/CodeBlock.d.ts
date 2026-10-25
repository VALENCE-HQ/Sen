import type { CodeBlockEvents, CodeBlockProps } from "../../registry/components/code-block";
import { type ComponentNode } from "../view";
export declare function CodeBlockView({ node }: {
    node: ComponentNode<CodeBlockProps, CodeBlockEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
