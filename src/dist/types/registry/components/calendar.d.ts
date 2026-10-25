export interface CalendarProps {
    value: string;
    month: string;
    minDate: string;
    maxDate: string;
    weekStartsOn: number;
}
export type CalendarEvents = {
    Changed: [value: string];
};
export declare const Calendar: import("../define").Component<CalendarProps, CalendarEvents, string>;
