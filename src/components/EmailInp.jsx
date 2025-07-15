import Input from "./input";
import { useState , memo } from "react";

const EmailInp = () => {
    const [email, setEmail] = useState('');

    let emailError = ``;

    if (email.length === 0) {
        emailError = ``;
    } else if (!email.includes('@')) {
        emailError = <small className='text-red-500'>Email must be contain @</small>;
    } else if (!email.includes('.')) {
        emailError = <small className='text-red-500'>Email must be contain .</small>;
    } else if (email.includes(' ')) {
        emailError = <small className='text-red-500'>Email dose not be contain space</small>;
    } else if (email.match(/[A-Z]/)) {
        emailError = <small className='text-red-500'>Email dose not be contain upercase character</small>;
    } else if (email.match(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)) {
        emailError = <small className='text-green-500'>Accepted</small>
    } else {
        emailError = <small className='text-red-500'>Email is not valid</small>
    }

    return (
        <Input
            type="email"
            id="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
        />
    )
}

export default memo(EmailInp);
