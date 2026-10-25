import * as React from "react";
type DivProps = React.HTMLAttributes<HTMLDivElement>;
export declare const Card: React.ForwardRefExoticComponent<DivProps & React.RefAttributes<HTMLDivElement>>;
export declare const CardHeader: ({ className, ...props }: DivProps) => React.JSX.Element;
export declare const CardTitle: ({ className, style, ...props }: DivProps) => React.JSX.Element;
export declare const CardDescription: ({ className, ...props }: DivProps) => React.JSX.Element;
export {};
