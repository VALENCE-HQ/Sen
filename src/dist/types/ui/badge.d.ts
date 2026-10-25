import { type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
export declare const badgeVariants: (props?: ({
    variant?: "primary" | "secondary" | "destructive" | "outline" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
export declare function Badge({ className, variant, ...props }: BadgeProps): import("react").JSX.Element;
