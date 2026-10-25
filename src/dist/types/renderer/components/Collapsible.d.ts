import type { CollapsibleEvents, CollapsibleProps } from "../../registry/components/collapsible";
import { type ComponentNode } from "../view";
export declare function CollapsibleView({ node }: {
    node: ComponentNode<CollapsibleProps, CollapsibleEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
