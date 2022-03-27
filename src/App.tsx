import * as React from 'react'
import './App.css'
import Card from './Components/Card'
import { FormEvent } from 'react'
import { FORM_INITAL_STATE } from './consts'
import { FormState, OnChangeProps, ValidationState } from './types'
import YourDetails from './Components/YourDetails'
import YourAnimal from './Components/YourAnimal'
import { validateFormData } from './utils/validateFormData'

const App = () => {
   const [form, setForm] = React.useState<FormState>(FORM_INITAL_STATE)
   const [validation, setValidation] = React.useState<ValidationState>({})
   const [formSent, setFormSent] = React.useState<boolean>(false)

   const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
      // prevents reload
      evt.preventDefault()
      // we have a form sent trigger so we can then tell the "app" it's ready to submit
      setFormSent(true)
      // ValidateInput (done on submit)
      setValidation(() => validateFormData(form))
   }

   React.useEffect(() => {
      /*
       * So I have never done validation on form submit before, I normally have inputs that validate on the fly
       * like this one I made on codesandbox when I some spare dev time:
       * https://codesandbox.io/s/doitallinput-euvkv
       */
      const doesAllValidationFail = Object.values(validation)?.includes(false)
      if (
         Object.values(validation).length > 0 &&
         !doesAllValidationFail &&
         formSent
      ) {
         /*
          * I would normally add a state that triggers a new view that said something like:
          * it's on its way!
          */
         alert('submitted')
         // sets state back so you can fill the form in fresh again.
         setForm(FORM_INITAL_STATE)
      }
      // resets the form sent flag
      setFormSent(false)
   }, [validation])

   const onChange = (data: OnChangeProps) => {
      const { id, value } = data
      setForm((prev) => ({ ...prev, [id]: { value } }))
   }

   return (
      <div className="App">
         <div className="container">
            <Card>
               <h1>Fill out this awesome form!</h1>
               <form onSubmit={(evt) => onSubmit(evt)}>
                  <div>
                     <YourDetails
                        form={form}
                        validation={validation}
                        onChange={onChange}
                     />
                  </div>
                  <hr />
                  <div>
                     <YourAnimal
                        form={form}
                        validation={validation}
                        onChange={onChange}
                        setValidation={setValidation}
                        setForm={setForm}
                     />
                  </div>
                  <hr />
                  <button type="submit">Create Account</button>
               </form>
            </Card>
         </div>
      </div>
   )
}

export default App
