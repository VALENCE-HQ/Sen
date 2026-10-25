export interface PaginationProps {
    page: number;
    pageCount: number;
    siblingCount: number;
}
export type PaginationEvents = {
    Changed: [page: number];
};
export declare const Pagination: import("../define").Component<PaginationProps, PaginationEvents, number>;
