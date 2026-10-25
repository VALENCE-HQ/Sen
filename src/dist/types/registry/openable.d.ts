import type { EventMap } from "../core/types";
import { Handle } from "../core/handle";
import type { ComponentDef } from "./define";
import type { ComponentProps } from "../core/types";
export interface OpenableHandle<P extends object, E extends EventMap> extends Handle<ComponentProps<P>, E, boolean> {
    Open(): this;
    Close(): this;
    /** Resolves when the component closes; resolves immediately when already closed. */
    Wait(): Promise<void>;
}
export interface OpenableComponent<P extends object, E extends EventMap> {
    (init?: Partial<ComponentProps<P>> | boolean): OpenableHandle<P, E>;
    readonly def: ComponentDef<P, E>;
}
export declare function defineOpenableComponent<P extends object, E extends EventMap>(def: ComponentDef<P, E> & {
    value: NonNullable<ComponentDef<P, E>["value"]>;
}): OpenableComponent<P, E>;
