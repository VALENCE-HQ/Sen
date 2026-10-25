import { type ComponentNode } from "../view";
import type { AttachmentEvents, AttachmentProps } from "../../registry/components/attachment";
export declare function AttachmentView({ node }: {
    node: ComponentNode<AttachmentProps, AttachmentEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
