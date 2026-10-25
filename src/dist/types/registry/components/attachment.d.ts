export interface AttachmentProps {
    name: string;
    fileSize: string;
    mediaType: string;
    previewUrl: string;
    status: "ready" | "uploading" | "error";
    progress: number;
    removable: boolean;
}
export type AttachmentEvents = {
    Removed: [];
};
export declare const Attachment: import("../define").Component<AttachmentProps, AttachmentEvents, never>;
