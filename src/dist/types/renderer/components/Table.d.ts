import type { TableProps } from "../../registry/components/table";
import { type ComponentNode } from "../view";
export declare function TableView({ node }: {
    node: ComponentNode<TableProps, Record<string, unknown[]>>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
