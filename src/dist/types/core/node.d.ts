import { Signals } from "./signals";
import type { EventMap } from "./types";
/** Describes the "main value" of a component: what Get()/Set(value) read and write. */
export interface ValueSpec<P, E> {
    /** The prop that holds the value. */
    prop: keyof P & string;
    /** Events fired (in order) when the value changes. */
    events?: (keyof E & string)[];
    /** Clamp / coerce incoming values. Receives the current props. */
    normalize?: (value: any, props: P) => any;
}
/**
 * The data behind one UI element. Nodes know nothing about React:
 * the renderer subscribes to them and draws whatever they currently hold.
 */
export declare class SenNode<P extends object = any, E extends EventMap = any> {
    readonly type: string;
    readonly spec?: ValueSpec<P, E> | undefined;
    readonly id: string;
    props: P;
    visible: boolean;
    destroyed: boolean;
    version: number;
    readonly signals: Signals<E>;
    private subs;
    constructor(type: string, props: P, spec?: ValueSpec<P, E> | undefined);
    /** For React's useSyncExternalStore. */
    subscribe: (fn: () => void) => (() => void);
    getVersion: () => number;
    bump(): void;
    patch(partial: Partial<P>): void;
    emit<K extends keyof E>(event: K, ...args: unknown[]): void;
    /**
     * Sets the main value, then fires the component's change events.
     * Called both by Handle.Set() and by the renderer when the user interacts.
     * Does nothing if the value did not change, which also stops Set-inside-Changed loops.
     */
    setValue(value: unknown, silent?: boolean): void;
}
