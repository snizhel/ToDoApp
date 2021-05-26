import React, { useState } from 'react'
import Backdrop from '../modals/Backdrop';
import ModalInsert from '../modals/ModalInsert';
// import PropTypes from 'prop-types'
import Todo from './Todo'
function TodoList(props) {
    const [isModalOpen, setModalIsOpen] = useState(false)

    function showModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }
    // function check() {
        
    //     console.log(props);
    // }

    return (
        
        <div>
            {/* <button onClick={check}>checkItem</button> */}
            <button onClick={showModal}>add</button>
            {/* {props.Db.then(data=>{
                data.data.map(todo=>{
                    
                })
            })} */}
            {props.Db.map((todo) => {
                return <Todo
                key={todo.id}
                id = {todo.id}
                title={todo.name}
                content={todo.message}
            />
            })}
            {isModalOpen && <Backdrop/>}
            {isModalOpen && <ModalInsert onCancel={closeModal}/>}
        </div>

    );





}

// TodoList.propTypes = {

// }

export default TodoList

