import * as React from 'react';
import Input from '../Input'
import { OnChange } from '../../types'

const YourDetails: React.FC<{
    form: any;
    validation: any;
    onChange: OnChange
}> = ({
    form,
    validation,
    onChange
}) => {
    console.log('adfdaf', validation);
    return (
        <>
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
        </>
    )
}

export default YourDetails;
