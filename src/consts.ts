import { FormState } from './types'

export const EMAIL_REGEX =
   /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
export const NOT_EMPTY_REGEX = /(.|\s)*\S(.|\s)*/

export const FORM_INITAL_STATE: FormState = {
   email: { value: '' },
   password: { value: '' },
   animals: { value: [] },
   colour: { value: '' },
   typeOfTiger: { value: '' },
}

export const COLOURS = ['blue', 'green', 'red', 'black', 'brown']
export const ANIMALS = ['bear', 'tiger', 'snake', 'donkey']
