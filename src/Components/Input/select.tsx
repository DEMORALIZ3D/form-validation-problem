import * as React from 'react';
import { COLOURS } from '../../consts'
import { InputError } from './index'
import { OnChange } from '../../types'

const Select: React.FC<{
    value: string;
    onChange: OnChange;
    id: string;
    validationMessage: string;
    validated: boolean;
    label: string;
}> = ({
    value,
    id,
    onChange,
    validationMessage,
    validated,
    label
}) => {

    return (
        <div className="colour-dropdown">
            <label>{`${label}:`}</label>
            <div>
                <select value={value} onChange={(evt) => onChange({
                    id: id,
                    value: evt.target.value
                })}>
                    <option
                        value=""
                        disabled
                        selected
                    >
                        Please select a option
                    </option>
                    {COLOURS.map((value, index) => (
                        <option
                            key={`${value}-${index}`}
                            value={value}
                        >
                            {value}
                        </option>
                    ))}
                </select>
                <InputError validated={validated} validationMessage={validationMessage} />
            </div>
        </div>
    )
}

export default Select;
