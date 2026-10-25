import type { AutocompleteEvents, AutocompleteProps } from "../../registry/components/autocomplete";
import { type ComponentNode } from "../view";
export declare function AutocompleteView({ node }: {
    node: ComponentNode<AutocompleteProps, AutocompleteEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
