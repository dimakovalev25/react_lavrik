import React from "react";
import PropTypes from "prop-types";

MaxMin.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default function MaxMin({max, min = 1, current, onChange}) {

    // const [current, setCurrent] = React.useState(min);

    function applyCurrent(num) {
        let validNum = Math.max(min, Math.min(max, num));
        onChange(validNum);
    }

    function parseCurrentStr(e) {
        let num = parseInt(e.target.value);
        applyCurrent(isNaN(num) ? min : max)
    }

    let inc = () => applyCurrent(current + 1)
    let dec = () => applyCurrent(current - 1)

    return (
        <div>
            <button
                onClick={dec}>-1
            </button>

            <input style={{width: '60px'}}
                   value={current}
                   onChange={parseCurrentStr}
                   type="text"/>

            <button
                onClick={inc}>+1
            </button>
        </div>
    )
}