export interface OnChangeProps {
   id: string
   value: string | string[]
}
export type OnChange = (data: OnChangeProps) => void

export type FormState = Record<string, Record<string, string | string[]>>
export type ValidationState = Record<string, boolean>
