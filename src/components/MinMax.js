import PropTypes from 'prop-types';
import './MinMax.css'

MinMax.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

function MinMax({min = 0, max, current, onChange}) {

    // console.log(current)

    function applyCurrent(num) {
        let validNum = Math.max(min, Math.min(max, num));
        onChange(validNum);
    }

    function changeCurrent(e) {
        let num = parseInt(e.target.value);
        applyCurrent(isNaN(num) ? min : num)
    }

    let inc = () => applyCurrent(current + 1);
    let dec = () => applyCurrent(current - 1);

    return (
        <div className="Counter">
            {/*<span>{current}</span> <br/>*/}
            <button
                onClick={inc}
                type={'button'}>+
            </button>

            <input
                className={'input'}
                value={current}
                onChange={changeCurrent}
                type="text"/>

            <button
                onClick={dec}
                type={'button'}>-
            </button>


        </div>
    );
}

export default MinMax;
