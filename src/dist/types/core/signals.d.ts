import type { EventMap } from "./types";
/** The listener lists behind every Then(...) call. */
export declare class Signals<E extends EventMap = EventMap> {
    private map;
    /** Adds a listener. Returns a function that removes it. */
    add<K extends keyof E>(event: K, fn: (...args: any[]) => void): () => void;
    /** Calls every listener. A throwing listener never stops the others. */
    emit<K extends keyof E>(event: K, ...args: unknown[]): void;
    clear(): void;
}
