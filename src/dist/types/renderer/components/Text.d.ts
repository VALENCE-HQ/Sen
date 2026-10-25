import type { TextEvents, TextProps } from "../../registry/components/text";
import { type ComponentNode } from "../view";
export declare function TextView({ node }: {
    node: ComponentNode<TextProps, TextEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
