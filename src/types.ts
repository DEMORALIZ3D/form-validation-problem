export interface OnChangeProps {
    id: string;
    value: string | [];
}
export type OnChange = (data: OnChangeProps) => void;

export type FormState = Record<[id: string], Record<string, string | []>>;
export type ValidationState = Record<[id: string], boolean>;
