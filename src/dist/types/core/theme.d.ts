import type { ControlSize } from "./types";
export type Mode = "dark" | "light" | "auto";
export type RadiusToken = "none" | "sm" | "md" | "lg" | "full";
export type ColorName = "background" | "foreground" | "card" | "popover" | "primary" | "primaryForeground" | "secondary" | "secondaryForeground" | "muted" | "mutedForeground" | "accent" | "accentForeground" | "border" | "input" | "ring" | "destructive" | "destructiveForeground";
export interface ThemeInput {
    /** A preset name: zinc, slate, rose, violet, blue, green, orange. Resets color overrides. */
    preset?: string;
    mode?: Mode;
    /** A token, or a number of pixels. */
    radius?: RadiusToken | number;
    /** Global control height in px, or a preset that scales height, padding and text together. */
    size?: ControlSize;
    /** Base spacing unit in px. gap: 2 means 2 x this. */
    spacing?: number;
    font?: {
        /** A family name ("Inter") or a full stack ("Inter, sans-serif"). Sen doesn't load fonts. */
        sans?: string;
        mono?: string;
        /** Body text size in px. */
        base?: number;
        /** Ratio between text sizes (xs..2xl). */
        scale?: number;
    };
    /** Hex, rgb(r,g,b) or "r g b". Applied in both modes. */
    colors?: Partial<Record<ColorName, string>>;
}
export interface ThemeSnapshot {
    preset: string;
    mode: Mode;
    resolvedMode: "dark" | "light";
    radius: RadiusToken | number;
    size: ControlSize;
    spacing: number;
    font: {
        sans?: string;
        mono?: string;
        base: number;
        scale: number;
    };
    colors: Partial<Record<ColorName, string>>;
}
type Neutral = Record<Exclude<ColorName, "primary" | "primaryForeground" | "ring">, string>;
interface Preset {
    primary: string | {
        dark: string;
        light: string;
    };
    neutral?: {
        dark?: Partial<Neutral>;
        light?: Partial<Neutral>;
    };
}
export declare const PRESETS: Record<string, Preset>;
export declare function parseColor(input: string): [number, number, number] | null;
/** Picks a readable text color for a given background. */
export declare function foregroundFor(color: string): string;
export type State = Omit<ThemeSnapshot, "resolvedMode">;
export declare function resolveMode(mode: Mode): "dark" | "light";
/** Pure: turns the state into the CSS custom properties written onto each host. */
export declare function buildVars(s: State, mode: "dark" | "light"): Record<string, string>;
export declare function applyTheme(host: HTMLElement): void;
/** Themes a host now and whenever Sen.Theme() changes. Returns an unregister function. */
export declare function registerThemeHost(host: HTMLElement): () => void;
export declare function getTheme(): ThemeSnapshot;
/**
 * Set tokens, or just read them.
 *   Sen.Theme("rose")
 *   Sen.Theme({ mode: "light", radius: "lg", colors: { primary: "#6366f1" } })
 * Calls merge: anything you leave out keeps its current value.
 */
export declare function Theme(input?: string | ThemeInput): ThemeSnapshot;
/** Back to defaults. Mainly for tests. */
export declare function resetTheme(): void;
export {};
