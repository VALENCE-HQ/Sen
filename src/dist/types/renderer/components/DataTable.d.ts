import type { DataTableEvents, DataTableProps } from "../../registry/components/data-table";
import { type ComponentNode } from "../view";
export declare function DataTableView({ node }: {
    node: ComponentNode<DataTableProps, DataTableEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
