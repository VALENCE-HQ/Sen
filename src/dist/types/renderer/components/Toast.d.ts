import type { ToastEvents, ToastProps } from "../../registry/components/toast";
import { type ComponentNode } from "../view";
export declare function ToastView({ node }: {
    node: ComponentNode<ToastProps, ToastEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
