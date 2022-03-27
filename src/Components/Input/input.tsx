import * as React from 'react';
import { ChangeEvent } from 'react'
import { OnChange } from '../../types'
import InputError from './inputError'

const Input: React.FC<{
    id: string;
    value?: string;
    callback: OnChange;
    validated?: boolean;
    validationMessage?: string;
    label: string;
    type?: string;
}> = ({
    id,
    value = '',
    callback,
    validated,
    validationMessage,
    label,
    type
}) => {
    const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value;

        callback({id, value})
    };

    return (
        <div className="input">
            <label className="input-label">{`${label}:`}</label>
            <div className="input-wrapper">
                <input id={id} value={value} onChange={onChange} type={type ? type : 'text'} />
                {(typeof validated === 'boolean' && !!validationMessage) && <InputError validated={validated} validationMessage={validationMessage} />}
            </div>
        </div>
    )
}

export default Input;
