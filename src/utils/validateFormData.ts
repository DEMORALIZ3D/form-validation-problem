import { FormState, ValidationState } from '../types'
import { EMAIL_REGEX, NOT_EMPTY_REGEX, PASSWORD_REGEX } from '../consts'

export const validateFormData = (form: FormState) => {
   let validated: ValidationState = {}
   Object.keys(form).forEach((id) => {
      switch (id) {
         case 'email':
            return (validated = {
               ...validated,
               [id]: EMAIL_REGEX.test(<string>form[id].value),
            })
         case 'password':
            return (validated = {
               ...validated,
               [id]: PASSWORD_REGEX.test(<string>form[id].value),
            })
         case 'colour':
            return (validated = {
               ...validated,
               [id]: NOT_EMPTY_REGEX.test(<string>form[id].value),
            })
         case 'animals':
            return (validated = {
               ...validated,
               [id]: form[id].value.length === 2,
            })
         case 'typeOfTiger':
            return (validated = {
               ...validated,
               [id]: !form['animals'].value.includes('tiger')
                  ? true
                  : NOT_EMPTY_REGEX.test(<string>form[id].value),
            })
         default:
            break
      }
   })
   // add validation to state to be picked up by the useState (the only way in a rush I could think to get the most
   // up to date info from the validate state
   return validated
}
