import type { SidebarEvents, SidebarProps } from "../../registry/components/sidebar";
import { type ComponentNode } from "../view";
export declare function SidebarView({ node }: {
    node: ComponentNode<SidebarProps, SidebarEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
