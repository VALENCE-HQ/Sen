export interface NavigationMenuItem {
    label: string;
    href: string;
    description?: string;
}
export interface NavigationMenuProps {
    items: NavigationMenuItem[];
}
export declare const NavigationMenu: import("../define").Component<NavigationMenuProps, {}, never>;
