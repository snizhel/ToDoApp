
import React, { useEffect, useState } from 'react'


// import PropTypes from 'prop-types'

import TodoList from "../components/TodoList"



// Todo.propTypes = {

// }

import productApi from '../services/productApi'


function Todo() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItem, setloadedItem] = useState([]);

    useEffect(() => {
        const fetchTodoList = async () => {
            try {
                const response = await productApi.getAll();
                console.log('Fetch products successfully: ',response);
                setIsLoading(false);
                setloadedItem(response);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchTodoList();
    }, []);
    // return <ProductList productList={productList} />;
    if (isLoading) {
        return <section><p>loading...</p></section>
    }
    return (
        <div>
            <h1>To do list</h1>
            <TodoList Db={loadedItem} />
        </div>
    )
}



export default Todo

