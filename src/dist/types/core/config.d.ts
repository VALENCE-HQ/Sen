/** Where saved configs live. Swap it for Tauri's store, a file, a server... */
export interface StorageAdapter {
    get(key: string): string | null | Promise<string | null>;
    set(key: string, value: string): void | Promise<void>;
}
export declare function SetStorage(next: StorageAdapter): void;
/** Saves every flagged element's value. Returns the JSON that was saved. */
export declare function SaveConfig(name?: string): Promise<string>;
/**
 * Loads values into flagged elements. Accepts a saved config name,
 * a JSON string, or a plain object. Returns false if nothing was found.
 */
export declare function LoadConfig(source?: string | Record<string, unknown>): Promise<boolean>;
