import {useState} from "react";

function ModalWindows() {

    const [modalClassName, setModalClassName] = useState('modal fade');

    function changeModalClassName() {
        setModalClassName('modal fade show')
        console.log(modalClassName)
    }

    return (

        <>
            <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={changeModalClassName}
            >
                Modal open!
            </button>

            <div className={modalClassName}  id="exampleModal" tabIndex="5" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-model="true" style={{display: 'block', cursor: 'pointer'}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ModalWindows;