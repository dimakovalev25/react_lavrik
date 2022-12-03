import {useState} from "react";
import PropTypes from 'prop-types';


function Counter({min = 1, max = 5}) {
    let [current, setCurrent] = useState(min);

    // console.log(typeof(current))

    function applyCurrent(num) {
        let validCurrent = Math.max(min, Math.min(max, num));
        setCurrent(validCurrent);
    }

    let inc = () => applyCurrent(current + 1);
    let dec = () => applyCurrent(current - 1);


    function changeCurrent(e) {
        // setCurrent(Number(e.target.value))
        let num = parseInt(e.target.value);
        applyCurrent(isNaN(num) ? min : num)
    }


    return (
        <div className="Counter">
            <span>{current}</span> <br/>
            {typeof current}
            <input
                value={current}
                onChange={changeCurrent}
                type="text"/>
            <button
                onClick={inc}
                type={'button'}>inc
            </button>

            <button
                onClick={dec}
                type={'button'}>dec
            </button>


        </div>
    );
}

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
}

export default Counter;
