export type AnimatedTextElement = "span" | "p" | "h2" | "h3" | "div";
export type AnimatedTextSplit = "none" | "words" | "characters";
export interface AnimatedTextProps {
    text: string;
    as: AnimatedTextElement;
    split: AnimatedTextSplit;
    duration: number;
    stagger: number;
    delay: number;
    label: string;
}
export declare const AnimatedText: import("../define").Component<AnimatedTextProps, {}, never>;
