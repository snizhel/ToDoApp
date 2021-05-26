
import React from 'react'
// import PropTypes from 'prop-types'
import './ModalUpdate.scss'

function Modal(props) {
    function onClickYes(){
        props.onClick();
    }
    function onClickNo() {
        props.onClick();
    }
    return (
        <div className="main">
            <div className="modal open" data-modal data-close="true">
                <div className="modal__window">
                    <div className="modal__header">
                        <h3>Delete ?</h3>
                        <button className="close-btn" data-close="true" onClick={props.onClick}>
                            <span className="close-btn__span" data-close="true"></span>
                            <span className="close-btn__span close-btn__span_second-child" data-close="true"></span>
                        </button>
                    </div>
                    <div className="modal__body">
                        <p>Are you sure to delete this todo</p>
                    </div>
                    <div className="modal__footer">
                        <button className="btn btn_primary" data-close="true" onClick={onClickYes}>Yes</button>
                        <button className="btn btn_primary" data-close="true" onClick={onClickNo}>No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Modal.propTypes = {

// }

export default Modal


