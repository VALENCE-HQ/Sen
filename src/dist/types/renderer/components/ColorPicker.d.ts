import type { ColorPickerEvents, ColorPickerProps } from "../../registry/components/color-picker";
import { type ComponentNode } from "../view";
type HSV = {
    hue: number;
    saturation: number;
    value: number;
};
export declare function hexToHsv(color: string): HSV;
export declare function hsvToHex({ hue, saturation, value }: HSV): string;
export declare function ColorPickerView({ node }: {
    node: ComponentNode<ColorPickerProps, ColorPickerEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export {};
