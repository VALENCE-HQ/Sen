import type { Child } from "../../core/handle";
export interface MessageScrollerProps {
    children: Child[];
    maxHeight: number;
    autoScroll: boolean;
    label: string;
}
export declare const MessageScroller: import("../define").Component<MessageScrollerProps, {}, never>;
