import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const AllTODO = () => {
    const allTODO = useSelector(state => state.todos);
    const dispatch = useDispatch();

    // deleting todo
    function deleteTODO(id) {
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        })
    };
    
    return (
        <section id="alltodos">
            <h2>{allTODO.length ? 'All TODOs' : 'No TODOs'}</h2>
            <ul>
                {
                    allTODO.map(todo => <li key={todo.id}>
                        <span>{todo.label}</span>
                        <span className="cross" onClick={() => deleteTODO(todo.id)}>&times;</span>
                    </li>)
                }
            </ul>
        </section>
    );
};

export default AllTODO;