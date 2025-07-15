import Input from "./input";
import { useState , memo } from "react";

const PasswordInp = () => {
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    let passwordError = ``;

    if (password.length === 0) {
        passwordError = ``;
    } else if (!password.match(/[A-Z]/) || !password.match(/[\W]/) || password.length < 8) {
        passwordError = <div className="flex flex-col gap-1">
            <small className={password.length < 8 ? 'text-red-400' : 'text-green-400'}>8 characters long</small>
            <small className={password.match(/[A-Z]/) ? 'text-green-400' : 'text-red-400'}>uppercase letter</small>
            <small className={password.match(/[\W]/) ? 'text-green-400' : 'text-red-400'}>special character</small>
        </div>
    } else {
        passwordError = <small className='text-green-400'>Accepted</small>
    }

    return (
            <div className='mt-5 flex gap-3'>

                {/* password */}

                <Input
                    type="password"
                    id="password"
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={passwordError}
                />

                {/* password confirmation */}

                <Input
                    type="password"
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    label="Password Confirmation"
                    placeholder="Enter your password confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    error={
                        passwordConfirmation.length === 0 ? `` 
                        : passwordConfirmation !== password ? <small className='text-red-400'>Not match</small> 
                        : <small className='text-green-400'>Accepted</small>
                    }
                />
            </div>
    )
}

export default memo(PasswordInp);
