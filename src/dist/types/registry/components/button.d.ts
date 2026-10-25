import type { ControlSize } from "../../core/types";
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive" | "link";
export interface ButtonProps {
    text: string;
    variant: ButtonVariant;
    /** A preset scale, numeric height in px, or "inherit" to follow Sen.Theme(). */
    size: ControlSize | "inherit";
    disabled: boolean;
    fullWidth: boolean;
}
export type ButtonEvents = {
    Pressed: [];
    Released: [];
    Hovered: [isHovering: boolean];
};
export declare const Button: import("../define").Component<ButtonProps, ButtonEvents, string>;
