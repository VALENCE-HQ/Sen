export interface CodeBlockProps {
    code: string;
    language: string;
    filename: string;
    showLineNumbers: boolean;
    copyText: string;
}
export type CodeBlockEvents = {
    Copied: [];
    CopyFailed: [message: string];
};
export declare const CodeBlock: import("../define").Component<CodeBlockProps, CodeBlockEvents, never>;
