import type { AnimationEvents, AnimationProps } from "../../registry/components/animation";
import { type ComponentNode } from "../view";
export declare function AnimationView({ node }: {
    node: ComponentNode<AnimationProps, AnimationEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
