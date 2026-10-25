export interface BreadcrumbItem {
    label: string;
    href?: string;
}
export interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator: string;
}
export declare const Breadcrumb: import("../define").Component<BreadcrumbProps, {}, never>;
