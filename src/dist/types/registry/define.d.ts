import { Handle } from "../core/handle";
import { type ValueSpec } from "../core/node";
import type { ComponentProps, EventMap } from "../core/types";
export interface ComponentDef<P extends object, E extends EventMap> {
    /** Unique name. The renderer looks its adapter up by this. */
    name: string;
    /** Every prop and its default. This is the full public config surface. */
    defaults: P;
    /** What Get() / Set(value) / flags read and write, if the component has a value. */
    value?: ValueSpec<P, E>;
}
export interface Component<P extends object, E extends EventMap, V> {
    /** Config object in, handle out. Value-bearing components also accept the bare value. */
    (init?: Partial<ComponentProps<P>> | V): Handle<ComponentProps<P>, E, V>;
    readonly def: ComponentDef<P, E>;
}
/** Every registered component name. The renderer checks it has an adapter for each. */
export declare const registeredNames: () => string[];
/**
 * Registers a component and returns its factory.
 *   P = props, E = events, V = main value type (omit if the component has none)
 */
export declare function defineComponent<P extends object, E extends EventMap, V = never>(def: ComponentDef<P, E>): Component<P, E, V>;
