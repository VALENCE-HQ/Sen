/**
 * Overlays (Select menus, later dialogs) must render inside Sen's shadow root,
 * not on document.body, or they lose their styles. The mount provides the node.
 */
export declare const PortalContext: import("react").Context<HTMLElement | null>;
export declare const usePortalContainer: () => HTMLElement | null;
