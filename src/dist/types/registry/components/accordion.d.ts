import type { Child } from "../../core/handle";
export interface AccordionEntry {
    value: string;
    title: string;
    content: Child;
    disabled?: boolean;
}
export type AccordionValue = string | string[];
export interface AccordionProps {
    items: AccordionEntry[];
    type: "single" | "multiple";
    value: AccordionValue;
    collapsible: boolean;
    orientation: "horizontal" | "vertical";
    dir: "ltr" | "rtl";
}
export type AccordionEvents = {
    Changed: [value: AccordionValue];
};
export declare const Accordion: import("../define").Component<AccordionProps, AccordionEvents, AccordionValue>;
