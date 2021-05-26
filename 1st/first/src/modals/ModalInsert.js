import React, { useRef } from 'react'

import productApi from '../services/productApi';
import './ModalInsert.scss'

export default function ModalInsert(props) {
    const titleInputRef = useRef();
    const contentInputRef = useRef();
    // function onClickYes() {
    //     props.onCancel();
    // }
    // function onClickNo() {
    //     props.onCancel();
    // }
    function onSubmit(event) {

        event.preventDefault();
        const enteredTitile = titleInputRef.current.value;
        const enteredContent = titleInputRef.current.value;
        try {
            productApi.create(enteredTitile,enteredContent);
            props.onCancel();
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <div className="main">
            <div className="modal open" data-modal data-close="true">

                <div className="container">

                    <form id="contact" onSubmit={onSubmit}>
                        <button className="close-btn " style={{ marginLeft: "90%", marginBottom: "5%" }} data-close="true" onClick={props.onCancel}>
                            <span className="close-btn__span" data-close="true"></span>
                            <span className="close-btn__span close-btn__span_second-child" data-close="true"></span>
                        </button>
                        <fieldset>
                            <input placeholder="Titile" type="text" tabIndex="1" required autoFocus ref={titleInputRef}></input>
                        </fieldset>

                        <fieldset>
                            <textarea placeholder="Type your message here...." tabIndex="5" required ref={contentInputRef}></textarea>
                        </fieldset>
                        <fieldset>
                            <button name="submit" type="submit" id="contact-submit" >Submit</button>
                        </fieldset>
                    </form>
                    {/* <div className="modal__footer">
                            <button className="btn btn_primary" data-close="true" onClick={onClickYes}>Yes</button>
                            <button className="btn btn_primary" data-close="true" onClick={onClickNo}>No</button>
                        </div> */}
                </div>


            </div>
        </div>

    )
}
