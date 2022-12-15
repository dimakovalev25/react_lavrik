import React from "react";
import PropTypes from "prop-types";

CounterFunc.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
}

export default function CounterFunc({max, min}) {

    const [count, setCount] = React.useState(min);

    function applyCount(num) {
        let validNum = Math.max(min, Math.min(max, num));
        setCount(validNum);
    }

    let inc = () => applyCount(count + 1)
    let dec = () => applyCount(count - 1)

    return (
        <div>
            <h2>Total: {max}</h2>
            <h2>Counter: {count} </h2>
            <br/>
            <input
                value={count}
                onChange={(e) => applyCount(+e.target.value)}
                type="number"/>
            <br/>
            <button
                onClick={inc}>+1
            </button>
            <button
                onClick={dec}>-1
            </button>
        </div>
    )
}