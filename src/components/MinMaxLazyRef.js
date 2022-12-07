import PropTypes from 'prop-types';
import './MinMax.css'
import {useRef} from "react";

MinMaxLazyRef.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

function MinMaxLazyRef({min = 0, max, current, onChange}) {

    let inp = useRef();

    function onKeyPress(e){
        if (e.key === 'Enter') {
            changeCurrent(e);
        }
    }

    function changeCurrent() {
        let num = parseInt(inp.current.value);
        applyCurrent(isNaN(num) ? min : num);
    }

    function applyCurrent(num) {
        let validNum = Math.max(min, Math.min(max, num));
        inp.current.value = validNum;
        onChange(validNum);
    }

    let inc = () => applyCurrent(current + 1);
    let dec = () => applyCurrent(current - 1);



    return (
        <div className="Counter">
            <button
                className={'btn btn-success'}
                onClick={inc}
                type={'button'}>+
            </button>

            <input
                onClick={inc}
                ref={inp}
                defaultValue={current}
                className={'input'}
                onBlur={changeCurrent}
                onKeyPress={onKeyPress}
                type="text"/>

            <button
                className={'btn btn-success'}
                onClick={dec}
                type={'button'}>-
            </button>


        </div>
    );
}

export default MinMaxLazyRef;
