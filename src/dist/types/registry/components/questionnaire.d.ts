export interface QuestionnaireOption {
    label: string;
    value: string;
}
export interface QuestionnaireQuestion {
    id: string;
    prompt: string;
    description?: string;
    type: "single" | "multiple" | "freeform";
    options?: QuestionnaireOption[];
    placeholder?: string;
    required?: boolean;
    skippable?: boolean;
}
export interface QuestionnaireProps {
    title: string;
    questions: QuestionnaireQuestion[];
    step: number;
    submitText: string;
}
export type QuestionnaireAnswer = string | string[];
export type QuestionnaireEvents = {
    Changed: [step: number];
    Answered: [questionId: string, answer: QuestionnaireAnswer];
    Completed: [answers: Record<string, QuestionnaireAnswer>];
};
export declare const Questionnaire: import("../define").Component<QuestionnaireProps, QuestionnaireEvents, number>;
