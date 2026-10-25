import type { SortableEvents, SortableProps } from "../../registry/components/sortable";
import { type ComponentNode } from "../view";
export declare function SortableView({ node }: {
    node: ComponentNode<SortableProps, SortableEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
