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

    let onInput = e => setInpVal(e.target.value);

    function onKeyPress(e) {
        if (e.key === 'Enter') {
            changeCurrent(e)
        }
    }

    function applyCurrent(num) {
        let validNum = Math.max(min, Math.min(max, num));
        setInpVal(validNum)
        onChange(validNum);
    }

    function changeCurrent() {
        let num = parseInt(inpVal);
        applyCurrent(isNaN(num) ? min : num)
    }

    let inc = () => applyCurrent(current + 1);
    let dec = () => applyCurrent(current - 1);

    useEffect(()=> {
        setInpVal(current)
    }, [current]);

    return (
        <div className="Counter">
            <button
                className={'btn btn-success'}
                onClick={inc}
                type={'button'}>+
            </button>

            <input
                className={'input'}
                value={inpVal}
                onBlur={changeCurrent}
                onKeyPress={onKeyPress}
                onChange={onInput}
                type="text"/>

            <button
                className={'btn btn-dark'}
                onClick={dec}
                type={'button'}>-
            </button>


        </div>
    );
}

export default MinMaxLazy;
