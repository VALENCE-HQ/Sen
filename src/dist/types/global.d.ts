import Sen from "./index";
declare global {
    interface Window {
        Sen: typeof Sen;
    }
}
