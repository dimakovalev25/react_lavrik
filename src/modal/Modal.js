import React from "react";
import './Modal.css'

const Modal = (props) => {

    if (!props.show){
        return null
    }

    return (
        <div
            // onClick={props.onClose}
            className='mod'>
            <div
                // onClick={e => e.stopPropagation()}
                // onClick={event => console.log(event)}
                className='mod-content'>
                <div className='mod-header'>
                    <h4 className='mod-title'>Modal window</h4>
                </div>
                <div className='mod-body'></div>
                <div className='mod-footer'>
                    <button
                        onClick={props.onClose}
                        className='button'>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;