import type { CSSProperties, ReactNode } from "react";
import type { ComponentAttributes, ComponentAnimation } from "../../core/types";
import type { FieldEvents, FieldProps as SenFieldProps } from "../../registry/components/field";
import { type ComponentNode } from "../view";
interface FieldProps {
    label?: string;
    description?: string;
    htmlFor?: string;
    /** Shown opposite the label, e.g. a slider's current value. */
    right?: ReactNode;
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    attributes?: ComponentAttributes;
    animation?: ComponentAnimation | false;
}
/** Label above, description below. Shared by every value-bearing element. */
export declare function Field({ label, description, htmlFor, right, children, className, style, attributes, animation }: FieldProps): import("react").JSX.Element;
export declare function FieldView({ node }: {
    node: ComponentNode<SenFieldProps, FieldEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
interface ToggleRowProps {
    label: string;
    description: string;
    htmlFor: string;
    /** Checkbox sits before its label; Switch sits after. */
    controlFirst?: boolean;
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    attributes?: ComponentAttributes;
    animation?: ComponentAnimation | false;
}
/** Label + control on one line, for Switch and Checkbox. */
export declare function ToggleRow({ label, description, htmlFor, controlFirst, children, className, style, attributes, animation }: ToggleRowProps): import("react").JSX.Element;
export {};
