import * as React from 'react'
import Input, { Select } from '../Input'
import { FormState, OnChange, ValidationState } from '../../types'
import AnimalCheckboxes from '../AnimalsCheckboxes'
import { ChangeEvent } from 'react'

const YourAnimal: React.FC<{
   form: FormState
   validation: ValidationState
   onChange: OnChange
   setValidation: React.Dispatch<React.SetStateAction<ValidationState>>
   setForm: React.Dispatch<React.SetStateAction<FormState>>
}> = ({ form, validation, onChange, setValidation, setForm }) => {
   const animals = form['animals'].value as string[]

   const animalsInputOnChange = (
      evt: ChangeEvent<HTMLInputElement>,
      value: string
   ) => {
      const formValue = value
      const checked = evt.target.checked
      if (animals.length === 2) {
         setValidation((prev) => ({ ...prev, animals: false }))
      } else {
         setValidation((prev) => ({ ...prev, animals: true }))
      }
      if (animals.includes(value)) {
         setForm((prev) => ({
            ...prev,
            ['animals']: {
               value: animals.filter((value) => value !== formValue),
            },
         }))
      } else {
         setForm((prev) => ({
            ...prev,
            ['animals']: { value: [...animals, checked ? formValue : ''] },
         }))
      }
   }

   return (
      <>
         <h3>Your Animal</h3>
         <Select
            id="colour"
            value={form['colour'].value as string}
            validated={validation['colour']}
            onChange={onChange}
            label="Colour"
            validationMessage="Please select a colour"
         />
         <AnimalCheckboxes
            value={animals}
            animalsOnChange={animalsInputOnChange}
            validated={validation['animals']}
            validationMessage={`You must ${
               form['animals'].value.length > 2 ? 'only' : ''
            } select 2 animals`}
         />
         {animals.includes('tiger') && (
            <Input
               id="typeOfTiger"
               value={form['typeOfTiger']?.value as string}
               callback={onChange}
               label="Type of Tiger"
               validationMessage="Please enter a type of tiger"
               validated={validation['typeOfTiger']}
            />
         )}
      </>
   )
}

export default YourAnimal
