
import React, { useState } from 'react';
import Backdrop from '../modals/Backdrop';
import ModalUpdate from '../modals/ModalUpdate';
// import PropTypes from 'prop-types'
import './Todo.scss'
import productApi from '../services/productApi';

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function showModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }
    function deleteItem() {

        try {
            productApi.delete(props.id);

        } catch (error) {
            console.log('Failed to delete item: ', error);
        }

    }
    return (
        <div>
            <div className="card">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <div className="button" >
                    <button onClick={showModal}>Update</button>
                    <button style={{ marginLeft: "1%" }} onClick={deleteItem}>Delete</button>

                </div>



            </div>

            {modalIsOpen && <Backdrop />}
            {modalIsOpen && <ModalUpdate onClick={closeModal} />}


        </div>
    )
}

// todo.propTypes = {

// }

export default Todo




