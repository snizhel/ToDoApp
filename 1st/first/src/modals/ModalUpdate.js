
import React, { useRef } from 'react'
import productApi from '../services/productApi';
// import PropTypes from 'prop-types'
import './ModalUpdate.scss'

function Modal(props) {


    function onClickYes() {
        // props.onClick();
        document.getElementById("submit").click();
    }

    const titleInputRef = useRef();
    const contentInputRef = useRef();
    function onSubmit(event) {

        event.preventDefault();
        const enteredTitile = titleInputRef.current.value;
        const enteredContent = contentInputRef.current.value;
        try {
            // productApi.update();?
            productApi.update(props.data.id,enteredTitile, enteredContent)
            props.onClick();
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="main">

            <div className="modal open" data-modal data-close="true">
                <div className="modal__window">
                    <div className="modal__header">
                        <h3>Update your "To do" title</h3>
                        <button className="close-btn" data-close="true" onClick={props.onClick}>
                            <span className="close-btn__span" data-close="true"></span>
                            <span className="close-btn__span close-btn__span_second-child" data-close="true"></span>
                        </button>
                    </div>

                    <div className="modal__body">
                        <form onSubmit={onSubmit}>
                            <fieldset>
                                <input className="update__title" placeholder="Title" type="text" defaultValue={props.data.title} tabIndex="1" required autoFocus ref={titleInputRef}></input>
                            </fieldset>

                            <fieldset>
                                <textarea className="update__content" placeholder="Type your message here...." tabIndex="5" defaultValue={props.data.content} required ref={contentInputRef}></textarea>
                            </fieldset>
                        </form>
                    </div>

                    <div className="modal__footer">
                        <button className="btn btn_primary" data-close="true" onClick={onClickYes}>Submit</button>
                        {/* <button className="btn btn_primary" data-close="true" onClick={onClickNo}>No</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

// Modal.propTypes = {

// }

export default Modal


