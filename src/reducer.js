const initialState = { todos: [] };

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case 'UPDATE_TODO':
            const { id, newLabel } = action.payload;
            const newTodo = { id : id, label: newLabel };
            const others = state.todos.filter(todo => todo.id !== id);
            return {
                ...state,
                todos: [...others, newTodo]
            };
        default:
            return state;
    };
};

export default reducer;