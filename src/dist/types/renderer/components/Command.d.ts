import type { CommandEvents, CommandProps } from "../../registry/components/command";
import { type ComponentNode } from "../view";
export declare function CommandView({ node }: {
    node: ComponentNode<CommandProps, CommandEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
