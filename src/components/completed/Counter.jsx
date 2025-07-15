import { useState } from "react";

// console.log('Counter.jsx ready');

export default function Counter() {

    // console.log('Counter Function rendered');

    const [number, setNumber] = useState(0);


    const increase = () => {
        setNumber(cur => cur + 1);
        setNumber(cur => cur + 1);
        setNumber(cur => cur + 1);
        setNumber(cur => cur + 1);
        setNumber(cur => cur + 1);
    }


    return (
        <div className="flex gap-5 items-center">
            <button onClick={increase} className="btn bg-green-400">+</button>

            <span>{number}</span>

            <button className="btn bg-red-400">-</button>
        </div>
    )
}
