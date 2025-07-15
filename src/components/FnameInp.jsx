import Input from "./input";
import { useState , memo } from "react";


const FnameInp = () => {

    const [firstName, setFirstName] = useState('');

    return (
        <Input
            type="text"
            id="firstName"
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={
                firstName.length === 0 ? null
                : firstName.length < 3 || firstName.length > 15 ? <small className='text-red-400'>Out of range</small>
                : !/^[a-z-]{3,15}$/i.test(firstName) ? <small className='text-red-400'>Not Accepted</small>
                : <small className='text-green-400'>Accepted</small>
            }
        />
    )
}

export default memo(FnameInp);