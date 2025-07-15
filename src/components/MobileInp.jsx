import Input from "./input";
import { useState , memo } from "react";

const MobileInp = () => {
    const [mobile, setMobile] = useState('');

    let mobErrorMsg = ``;

    if (mobile.length === 0) {
        mobErrorMsg = ``;
    } else if (mobile.match(!/^0/) || !/^01/.test(mobile) || mobile.match(!/^01[0125]/)) {
        mobErrorMsg = <small className='text-red-400'>must start with 010, 011, 012 or 015</small>;
    } else if (mobile.length > 11 || mobile.length < 11) {
        mobErrorMsg = <small className='text-red-400'>Mobile must be 11 digits</small>;
    } else {
        mobErrorMsg = <small className='text-green-400'>Accepted</small>;
    }
    
    return (
        <Input
            type="text"
            id="mobile"
            name="mobile"
            label="Mobile"
            placeholder="Enter your mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            error={mobErrorMsg}
        />
    )
}

export default memo(MobileInp);