import type { SenNode } from "./node";
import type { EventMap, Listener } from "./types";
/** Anything you can nest inside a container: another element, or plain text. */
export type Child = Handle<any, any, any> | string | number;
/**
 * What every Sen.* call returns.
 *   P = the element's props, E = its events, V = the type of its main value
 */
export declare class Handle<P extends object = any, E extends EventMap = any, V = never> {
    readonly node: SenNode<P, E>;
    constructor(node: SenNode<P, E>);
    get id(): string;
    get type(): string;
    /**
     * Listen for an event. Both shapes work and return the handle:
     *   Button.Then("Pressed", fn)
     *   Button.Then("Pressed")(fn)
     */
    Then<K extends keyof E>(event: K, fn: Listener<E, K>): this;
    Then<K extends keyof E>(event: K): (fn: Listener<E, K>) => this;
    /** Reads the main value, or one named prop. */
    Get(): V;
    Get<K extends keyof P>(prop: K): P[K];
    /**
     * Set the main value, or patch several props at once:
     *   Slider.Set(50)
     *   Button.Set({ disabled: true, text: "Wait" })
     * Pass true as the second argument to change a value without firing Changed.
     */
    Set(value: V, silent?: boolean): this;
    Set(patch: Partial<P>): this;
    /** Append children to a container (Stack, Grid, Card). */
    Add(...items: Child[]): this;
    SetVisible(visible: boolean): this;
    /** Removes the element, its flag, its listeners, and everything nested inside it. */
    Destroy(): void;
}
