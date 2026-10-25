import type { ItemProps } from "../../registry/components/item";
import { type ComponentNode } from "../view";
export declare function ItemView({ node }: {
    node: ComponentNode<ItemProps, Record<string, unknown[]>>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
