import Input from "./input";
import { useState , memo } from "react";

const LnameInput = () => {
    const [lastName, setLastName] = useState('');

    return (
        <Input
            type="text"
            id="lastName"
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={
                lastName.length === 0 ? null
                : lastName.length < 3 || lastName.length > 15 ? <small className='text-red-400'>Out of range</small>
                : !/^[a-z -]{3,15}$/i.test(lastName) ? <small className='text-red-400'>Not Accepted</small>
                : <small className='text-green-400'>Accepted</small>
            }
        />
    )
}

export default memo(LnameInput);
