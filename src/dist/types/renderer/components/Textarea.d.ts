import type { TextareaEvents, TextareaProps } from "../../registry/components/textarea";
import { type ComponentNode } from "../view";
export declare function TextareaView({ node }: {
    node: ComponentNode<TextareaProps, TextareaEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
