import type { BadgeEvents, BadgeProps } from "../../registry/components/badge";
import { type ComponentNode } from "../view";
export declare function BadgeView({ node }: {
    node: ComponentNode<BadgeProps, BadgeEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
