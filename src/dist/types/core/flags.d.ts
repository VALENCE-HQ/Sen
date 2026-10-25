import type { Handle } from "./handle";
export declare function registerFlag(name: string, handle: Handle<any, any, any>): void;
export declare function unregisterFlag(name: string, handle: Handle<any, any, any>): void;
/**
 * Global access to element values by flag name:
 *   Sen.Flags.speed         // read
 *   Sen.Flags.speed = 80    // write (fires Changed, just like Set)
 */
export declare const Flags: Record<string, any>;
export declare function snapshotFlags(): Record<string, unknown>;
export declare function applyFlags(values: Record<string, unknown>): void;
