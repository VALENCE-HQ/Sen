import { type VariantProps } from "class-variance-authority";
import * as React from "react";
export declare const buttonVariants: (props?: ({
    variant?: "link" | "primary" | "secondary" | "destructive" | "outline" | "ghost" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
