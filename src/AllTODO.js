import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UpdateTODO from './UpdateTODO';

const AllTODO = () => {
    const allTODO = useSelector(state => state.todos);
    const [edit, setEdit] = useState(null);
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
                    allTODO.map(todo => <li key={todo.id} id={todo.id}>
                        {
                            edit === todo.id ? <UpdateTODO data={todo} setEdit={setEdit} /> :
                            <>
                            <span>{todo.label}</span>
                            <div className="box">
                                <span onClick={() => setEdit(todo.id)}>&#x0224B;</span>
                                <span className="cross" onClick={() => deleteTODO(todo.id)}>&#x0229D;</span>
                            </div>
                            </>
                        }                        
                    </li>)
                }
            </ul>
        </section>
    );
};

export default AllTODO;