import * as React from 'react';

const InputError: React.FC<{
    validated?: boolean;
    validationMessage?: string;
}> = ({validated, validationMessage}) => {

    return (
        <div className={`input-error ${validated === false ? 'display' : ''}`}>
            <p>{validationMessage}</p>
        </div>
    )
}

export default InputError;
