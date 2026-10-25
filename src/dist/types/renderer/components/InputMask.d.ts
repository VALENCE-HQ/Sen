import type { InputMaskEvents, InputMaskKind, InputMaskProps } from "../../registry/components/input-mask";
import type { ComponentNode } from "../view";
export declare function formatMaskedValue(input: string, mask: string, kind: InputMaskKind): string;
export declare function InputMaskView({ node }: {
    node: ComponentNode<InputMaskProps, InputMaskEvents>;
}): import("react").JSX.Element;
