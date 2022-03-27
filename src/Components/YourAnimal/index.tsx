import * as React from 'react';
import { ANIMALS, COLOURS } from '../../consts'
import Input, { InputError, Select } from '../Input'
import { FormState, OnChange, ValidationState } from '../../types'
import AnimalCheckboxes from '../AnimalsCheckboxes'

const YourAnimal: React.FC<{
    form: any;
    validation: any;
    onChange: OnChange;
    setValidation: (data: ValidationState) => void;
    setForm: (data: FormState) => void;
}> = ({
    form,
    validation,
    onChange,
    setValidation,
    setForm
}) => {

    const animals = form['animals'].value;

    const animalsInputOnChange = (evt, value) => {
        const formValue = value;
        const checked = evt.target.checked;
        if(animals.length === 2) {
            setValidation((prev) => ({...prev, animals: false}))
        } else {
            setValidation((prev) => ({...prev, animals: true}));
        }
        if(animals.includes(value)) {
            setForm((prev) => ({...prev, ['animals']: {value: animals.filter((value) => value !== formValue)}}));
        } else {
            setForm((prev) => ({...prev, ['animals']: {value: [...animals, checked ? formValue : '']}}));
        }
    }

    return (
        <>
            <h3>Your Animal</h3>
            <Select
                id="colour"
                form={form['colour'].value}
                validated={validation['colour']}
                onChange={onChange}
                label="Colour"
                validationMessage="Please select a colour"
            />
            <AnimalCheckboxes
                value={form['animals'].value}
                animalsOnChange={animalsInputOnChange}
                validated={validation['animals']}
                validationMessage={`You must ${form['animals'].value.length > 2 ? 'only' : ''} select 2 animals`}
            />
            {animals.includes('tiger') && (
                <Input
                    id="typeOfTiger"
                    value={form['typeOfTiger']?.value}
                    callback={onChange}
                    label="Type of Tiger"
                    validationMessage="Please enter a type of tiger"
                    validated={validation['typeOfTiger']}
                />
            )}
        </>
    )
}

export default YourAnimal;
