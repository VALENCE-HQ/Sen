export interface BadgeProps {
    text: string;
    variant: "primary" | "secondary" | "outline" | "destructive";
}
export type BadgeEvents = {};
export declare const Badge: import("../define").Component<BadgeProps, BadgeEvents, string>;
