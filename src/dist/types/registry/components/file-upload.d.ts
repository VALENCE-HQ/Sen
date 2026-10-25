export interface UploadedFileInfo {
    name: string;
    size: number;
    type: string;
    lastModified: number;
}
export interface FileUploadProps {
    label: string;
    description: string;
    accept: string;
    multiple: boolean;
    maxFiles: number;
    maxSize: number;
    disabled: boolean;
}
export type FileUploadEvents = {
    Selected: [files: File[]];
    Rejected: [fileName: string, reason: string];
};
export declare const FileUpload: import("../define").Component<FileUploadProps, FileUploadEvents, never>;
