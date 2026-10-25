export interface CommandItem {
    label: string;
    value: string;
    description?: string;
    keywords?: string[];
    disabled?: boolean;
}
export interface CommandProps {
    label: string;
    placeholder: string;
    emptyText: string;
    items: CommandItem[];
}
export type CommandEvents = {
    Selected: [value: string];
};
export declare const Command: import("../define").Component<CommandProps, CommandEvents, never>;
