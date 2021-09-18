import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO
}
    from "../actionTypes";

const INITIAL_STATE = {
    todos: []
};

export const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        default:
            return state
    }
};

