export type DataTableValue = string | number | boolean | null;
export type DataTableRow = Record<string, DataTableValue>;
export interface DataTableColumn {
    key: string;
    label: string;
    sortable?: boolean;
}
export interface DataTableProps {
    columns: DataTableColumn[];
    rows: DataTableRow[];
    pageSize: number;
    searchable: boolean;
    caption: string;
}
export type DataTableEvents = {
    RowSelected: [row: DataTableRow];
};
export declare const DataTable: import("../define").Component<DataTableProps, DataTableEvents, never>;
