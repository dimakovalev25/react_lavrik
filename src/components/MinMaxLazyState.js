import PropTypes from 'prop-types';
import './MinMax.css'
import {useEffect, useState} from "react";

MinMaxLazy.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

function MinMaxLazy({min = 0, max, current, onChange}) {

    let [inpVal, setInpVal] = useState(current);

    let onInput = event => setInpVal(event.target.value)

    function onKeyPress(e){
        if (e.key === 'Enter')
            changeCurrent(e)
    }

    function applyCurrent(num) {
        let validNum = Math.max(min, Math.min(max, num));
        onChange(validNum);
        setInpVal(validNum);
    }

    function changeCurrent(e) {
        let num = parseInt(inpVal);
        applyCurrent(isNaN(num) ? min : num);

    }

    let inc = () => applyCurrent(current + 1);
    let dec = () => applyCurrent(current - 1);


    useEffect(() => {
        setInpVal(current);
    }, [current])

    return (
        <div className="Counter">
            <button
                onClick={inc}
                type={'button'}>+
            </button>

            <input
                className={'input'}
                value={inpVal}
                onChange={onInput}
                onBlur={changeCurrent}
                onKeyPress={onKeyPress}
                type="text"/>

            <button
                onClick={dec}
                type={'button'}>-
            </button>


        </div>
    );
}

export default MinMaxLazy;
