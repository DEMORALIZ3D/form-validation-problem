import * as React from 'react'
import Input from '../Input'
import { FormState, OnChange, ValidationState } from '../../types'

const YourDetails: React.FC<{
   form: FormState
   validation: ValidationState
   onChange: OnChange
}> = ({ form, validation, onChange }) => {
   return (
      <>
         <h3>Your Details</h3>
         <Input
            id="email"
            value={form['email']?.value as string}
            callback={onChange}
            label="Email"
            validationMessage="Please enter a correct email"
            validated={validation['email']}
         />
         <Input
            id="password"
            value={form['password']?.value as string}
            callback={onChange}
            label="Password"
            validationMessage="Minimum eight characters, at least one letter and one number"
            validated={validation['password']}
            type="password"
         />
      </>
   )
}

export default YourDetails
