import React from 'react';
import { useDispatch } from 'react-redux';

const Input = () => {
    const dispatch = useDispatch();

    // add new todo
    function addTODO(e) {
        e.preventDefault();
        const form = document.getElementById('todoForm');        
        const todo = form.todo.value;
        dispatch({
            type: 'ADD_TODO',
            payload: {
                label: todo,
                id: Math.ceil(Math.random() * 100)
            }
        });
        form.reset();
    }

    return (
        <form onSubmit={addTODO} id="todoForm">
            <input type="text" name="todo" required/>
            <button type="submit">Add TODO</button>
        </form>
    );
};

export default Input;