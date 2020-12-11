import React from 'react';
import { useDispatch } from 'react-redux';

const UpdateTODO = ({ data, setEdit }) => {
    const { label, id } = data;
    const dispatch = useDispatch();

    // updating todo
    function updateTODO(e) {
        e.preventDefault();
        const newLabel = e.target.todo.value;
        dispatch({
            type: 'UPDATE_TODO',
            payload: { id, newLabel }
        });
        setEdit(null);
    };

    return (
        <form className="editForm" onSubmit={updateTODO}>
            <input autoFocus className="editBox" name="todo" defaultValue={label} />
            <input type="submit" className="editBox" value="Update" />
        </form>
    );
};

export default UpdateTODO;