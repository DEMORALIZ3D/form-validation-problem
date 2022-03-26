import * as React from 'react';
import './App.css'
import Card from "./Components/Card";
import {FormEvent} from "react";
import Input from './Components/Input'
import { ANIMALS, COLOURS, EMAIL_REGEX, NOT_EMPTY_REGEX, PASSWORD_REGEX } from './consts'

const App = () => {
    const [form, setForm] = React.useState<Record<[id: string], {value: string; validated?: boolean}>>({})
    const [validation, setValidation] = React.useState<Record<[id: string], boolean>>({})


    const validateInput = (value, regexp) => {
        console.log('validate', value, regexp.test(value))
        return regexp.test(value)
    }

    const validateEachInput = async () => {
        // hit a stupid snag and its broke because of trying to update states.
        // need to add a local array, and then fail the submission, then update validation
        // - its so much easier to validate each input. URGGHH
        for (const id of Object.keys(form)) {
            switch (id) {
                case 'email':
                    setValidation((prev) => ({
                        ...prev, [id]: validateInput(form[id].value, EMAIL_REGEX)
                    }));
                case 'password':
                    setValidation((prev) => ({
                        ...prev, [id]: validateInput(form[id].value, PASSWORD_REGEX)
                    }));
                case 'colour':
                    setValidation((prev) => ({
                        ...prev, [id]: validateInput(form[id].value, NOT_EMPTY_REGEX)
                    }));
                case 'animals':
                    setValidation((prev) => ({
                        ...prev, [id]: Array.isArray(form[id].value) && form[id].value.length === 2
                    }));
                case 'typeOfTiger':
                    setValidation((prev) => ({
                        ...prev, [id]: validateInput(form[id].value, NOT_EMPTY_REGEX)
                    }));
                default:
                    break;
            }
        }
    }

    const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        await validateEachInput();
    };

    React.useEffect(() => {
        const doesAllValidationFail = Object.values(validation)?.includes(false);
        console.log('validation', Object.values(validation), !doesAllValidationFail)
        if(Object.values(validation).length > 0 && !doesAllValidationFail) {
            alert('submitted');
        }
    }, [validation]);

    const onChange = (data: {
        id: string,
        value: string,
    }) => {
        const {id, value} = data;
        setForm((prev) => ({...prev, [id]: {value}}))
    }

  return (
    <div className="App">
      <div className="container">
          <Card>
              <h1>Fill out this awesome form!</h1>
              <form onSubmit={(evt) => onSubmit(evt)}>
                  <div>
                      <h3>Your Details</h3>
                      <Input
                          id="email"
                          value={form['email']?.value}
                          callback={onChange}
                          label="Email"
                          validationMessage="Please enter a correct email"
                          validated={validation['email']}
                      />
                      <Input
                          id="password"
                          value={form['password']?.value}
                          callback={onChange}
                          label="Password"
                          validationMessage="Minimum eight characters, at least one letter and one number"
                          validated={validation['password']}
                          type="password"
                      />
                  </div>
                  <hr />
                  <div>
                      <h3>Your Animal</h3>
                      <div className="colour-dropdown">
                          <label>Colour:</label>
                          <div>
                              <select onChange={(evt) => onChange({
                                  id: 'colour',
                                  value: evt.target.value
                              })}>
                                  {COLOURS.map((value, index) => (
                                      <option
                                          key={`${value}-${index}`}
                                          value={value}
                                      >
                                          {value}
                                      </option>
                                  ))}
                              </select>
                          </div>
                      </div>
                      <div className="animals-checkboxes">
                          <label>Animals:</label>
                          <div className="checkboxes">
                              {ANIMALS.map((value, index) => (
                                  <div key={`${value}-${index}`}>
                                      <label>{value}</label>
                                      <input
                                          id="animal"
                                          checked={form['animal']?.value === value}
                                          onChange={(evt) => onChange({
                                              id: 'animal',
                                              value: evt.target.checked ? value : ''
                                          })}
                                          type="checkbox"
                                      />
                                  </div>
                              ))}
                          </div>
                      </div>
                      {form['animal']?.value === 'tiger' && (
                          <Input
                              id="typeOfTiger"
                              value={form['typeOfTiger']?.value}
                              callback={onChange}
                              label="Type of Tiger"
                              validationMessage="Please enter a type of tiger"
                              validated={validation['typeOfTiger']}
                          />
                      )}
                  </div>
                  <hr/>
                  <button type="submit">Create Account</button>
              </form>
          </Card>
      </div>
    </div>
  )
}

export default App
