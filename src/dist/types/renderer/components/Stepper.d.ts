import type { StepperEvents, StepperProps } from "../../registry/components/stepper";
import { type ComponentNode } from "../view";
export declare function StepperView({ node }: {
    node: ComponentNode<StepperProps, StepperEvents>;
}): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
