export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "p" | "blockquote" | "lead" | "large" | "small" | "muted" | "inlineCode" | "list";
export interface TypographyProps {
    text: string;
    variant: TypographyVariant;
}
export declare const Typography: import("../define").Component<TypographyProps, {}, never>;
