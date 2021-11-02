import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    SET_TODOS,
    RESET_SNACKBARS
}
    from "../actionTypes";

const INITIAL_STATE = {
    todos: [],
    snackbars : []
};

export const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TODOS:
            return  {
                ...state,
                todos: action.payload
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                snackbars: [{msg: 'Добавлено успешно', type: 'info'}]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        todo.completed = !todo.completed;
                    }
                    return todo
                }),
                snackbars: [{msg: 'Изменено успешно', type: 'info'}]
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
                snackbars: [{msg: 'Удалено успешно', type: 'info'}]
            };
        case RESET_SNACKBARS:
            return {
                ...state,
                snackbars: []
            };
        default:
            return state
    }
};

