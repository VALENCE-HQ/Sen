import { type ComponentType, type ReactElement, type ReactNode } from "react";
import { type Child } from "../core/handle";
import type { SenNode } from "../core/node";
import type { ComponentProps, EventMap } from "../core/types";
export type Adapter = ComponentType<{
    node: SenNode<any, any>;
}>;
export type ComponentNode<P extends object, E extends EventMap> = SenNode<ComponentProps<P>, E>;
export declare function registerAdapter(name: string, adapter: Adapter): void;
export declare function getAdapter(name: string): Adapter;
export declare function getDefaultAdapter(name: string): Adapter;
export declare const hasAdapter: (name: string) => boolean;
/** Draws one node, and redraws only when that node changes. */
export declare function NodeView({ node }: {
    node: SenNode<any, any>;
}): import("react").JSX.Element | null;
export declare function customizeRoot<P extends object, E extends EventMap>(node: ComponentNode<P, E>, element: ReactElement): ReactElement;
export declare function renderItem(item: Child | null | undefined): ReactNode;
export declare function renderItems(items: Child[]): ReactNode[];
/** In spacing units: sp(2) is two of Sen.Theme({ spacing }). */
export declare const sp: (units: number) => string;
