import * as React from 'react';
import { ChangeEvent } from 'react'

const Input: React.FC<{
    id: string;
    value?: string;
    callback: ({id, value}: {id: string; value: string}) => void;
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
            <label className={`input-label ${!validated ? 'display' : ''}`}>{`${label}:`}</label>
            <div className="input-wrapper">
                <input id={id} value={value} onChange={onChange} type={type ? type : 'text'} />
                <div className={`input-error ${validated === false ? 'display' : ''}`}>
                    <p>{validationMessage}</p>
                </div>
            </div>
        </div>
    )
}

export default Input;
