import React, {useRef} from "react";
import useClickOutside from "./hooks/UseClickOutside";

const Modal = ({title, showed, onClose, children}) => {

    console.log(children)

    let classes = ['alert', 'alert-success'];

    if (!showed) {
        classes.push('d-none')
    }

    let root = useRef();

    useClickOutside(root, function () {
        if (showed) {
            // console.log('useClickOutside');
        }
    });

    return (
        <div
            ref={root}
            className={classes.join(' ')}>
            {children}
            <h2>
                {title}
            </h2>
            <button
                onClick={onClose}
                className={'btn btn-success'}>Ok
            </button>
        </div>
    )

}

export default Modal;
