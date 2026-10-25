export interface MenuEntry {
    label: string;
    value?: string;
    shortcut?: string;
    disabled?: boolean;
    destructive?: boolean;
    type?: "item" | "separator" | "label";
    checked?: boolean;
}
