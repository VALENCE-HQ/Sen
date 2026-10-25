interface CalendarGridProps {
    value: string;
    month: string;
    minDate: string;
    maxDate: string;
    weekStartsOn: number;
    onSelect: (value: string) => void;
}
export declare function CalendarGrid({ value, month, minDate, maxDate, weekStartsOn, onSelect }: CalendarGridProps): import("react").JSX.Element;
export {};
