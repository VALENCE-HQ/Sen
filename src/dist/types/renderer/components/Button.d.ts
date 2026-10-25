import type { ButtonEvents, ButtonProps } from "../../registry/components/button";
import { type ComponentNode } from "../view";
export declare function ButtonView({ node }: {
    node: ComponentNode<ButtonProps, ButtonEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
