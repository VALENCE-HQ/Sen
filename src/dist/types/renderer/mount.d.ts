import type { Child } from "../core/handle";
import "./components";
export interface MountOptions {
    /** Paint Sen's themed background behind the UI. Default true. */
    surface?: boolean;
    /** Extra CSS scoped to this Sen shadow root. Use with component className options. */
    styles?: string;
}
export interface MountHandle {
    readonly host: HTMLElement;
    Unmount(): void;
}
/** Draws elements into the page, inside an isolated shadow root. */
export declare function Mount(items: Child | Child[], target?: Element | string, options?: MountOptions): MountHandle;
/** Sen.Notify creates its own fixed host the first time it's used. */
export declare function ensureToastHost(): void;
