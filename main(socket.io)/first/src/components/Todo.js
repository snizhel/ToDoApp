
import React, { useState } from 'react';
import Backdrop from '../modals/Backdrop';
import ModalUpdate from '../modals/ModalUpdate';
// import PropTypes from 'prop-types'
import './Todo.scss'
import productApi from '../services/productApi';
import webSocket from '../services/webSocket';

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    let [sendData] = useState({
        id: props.id,
        title: props.title,
        content: props.content
    })



    function showModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }

    function deleteItem() {

        try {
            productApi.delete(props.id);
            webSocket.emit('data','data');
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
                    <button onClick={showModal}> Update </button>
                    <button onClick={deleteItem}> Delete </button>

                </div>



            </div>

            {modalIsOpen && <Backdrop />}
            {modalIsOpen && <ModalUpdate onClick={closeModal} data={sendData} />}


        </div>
    )
}

// todo.propTypes = {

// }

export default Todo




