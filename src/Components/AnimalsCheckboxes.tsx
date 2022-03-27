import * as React from 'react';
import { ANIMALS } from '../consts'
import { InputError } from './Input'
import { ChangeEvent } from 'react'

const AnimalCheckboxes: React.FC<{
    value,
    animalsOnChange: (evt: ChangeEvent<HTMLInputElement>, value: string) => void;
    validated: boolean;
    validationMessage: string;
}> = ({
    value: formValue,
    animalsOnChange,
    validated,
    validationMessage
}) => {
    return (
        <div className="animals-checkboxes">
            <label>Animals:</label>
            <div className="checkboxes">
                {ANIMALS.map((value, index) => (
                    <div key={`${value}-${index}`}>
                        <label>{value}</label>
                        <input
                            id="animal"
                            checked={formValue?.includes(value)}
                            onChange={(evt) => animalsOnChange(evt, value)}
                            type="checkbox"
                        />
                    </div>
                ))}
            </div>
            <InputError
                validated={validated}
                validationMessage={validationMessage}
            />
        </div>
    )
}

export default AnimalCheckboxes;
