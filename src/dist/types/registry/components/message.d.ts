import type { Child } from "../../core/handle";
export interface MessageProps {
    author: string;
    avatar: string;
    timestamp: string;
    children: Child[];
    align: "start" | "end";
}
export declare const Message: import("../define").Component<MessageProps, {}, never>;
