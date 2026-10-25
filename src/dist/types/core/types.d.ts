/** Maps an event name to the tuple of arguments its listeners receive. */
export type EventMap = {
    [event: string]: unknown[];
};
/** Argument tuple for event K of E. */
export type Args<E, K extends keyof E> = E[K] extends unknown[] ? E[K] : never;
/** A listener for event K of E. */
export type Listener<E, K extends keyof E> = (...args: Args<E, K>) => void;
export type Size = "sm" | "md" | "lg";
export type ControlSize = Size | number;
export interface ComponentAttributes {
    id?: string;
    title?: string;
    role?: string;
    tabIndex?: number;
    dir?: string;
    lang?: string;
    hidden?: boolean;
    name?: string;
    autoComplete?: string;
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
    readOnly?: boolean;
    required?: boolean;
    form?: string;
    contentEditable?: boolean | "inherit" | "plaintext-only";
    draggable?: boolean;
    spellCheck?: boolean;
    [attribute: `data-${string}`]: string | number | boolean | undefined;
    [attribute: `aria-${string}`]: string | number | boolean | undefined;
}
export interface ComponentAnimation {
    /** CSS @keyframes name. Define it in Sen.Mount({ styles }). */
    name: string;
    /** Animation duration in milliseconds. Defaults to 250. */
    duration?: number;
    /** CSS timing function. Defaults to "ease". */
    easing?: string;
    /** Delay in milliseconds. Defaults to 0. */
    delay?: number;
    /** Number of iterations, or "infinite". Defaults to 1. */
    iterations?: number | "infinite";
    direction?: "normal" | "reverse" | "alternate" | "alternate-reverse";
    fillMode?: "none" | "forwards" | "backwards" | "both";
}
export interface ComponentCustomizationProps {
    /** Appended to the rendered component's root element. */
    className: string;
    /** Merged over the component's built-in inline styles. */
    style: Record<string, string | number | undefined>;
    /** Additional DOM attributes such as id, title, data-* and aria-*. */
    attributes: ComponentAttributes;
    /** Opt-in CSS keyframe animation for the component root. */
    animation: ComponentAnimation | false;
}
export type ComponentProps<P extends object> = P & ComponentCustomizationProps;
export declare function isPlainObject(v: unknown): v is Record<string, unknown>;
