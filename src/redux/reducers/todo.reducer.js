import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    SET_TODOS,
    RESET_MESSAGES,
    ADD_MESSAGE
}
    from "../actionTypes";

const INITIAL_STATE = {
    todos: [],
    messages : []
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
                messages: [{msg: 'Добавлено успешно', type: 'info', isOpen: true}]
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
                messages: [{msg: 'Изменено успешно', type: 'info', isOpen: true}]
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
                messages: [{msg: 'Удалено успешно', type: 'info', isOpen: true}]
            };
        case RESET_MESSAGES:
            return {
                ...state,
                messages: []
            };
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [action.payload]
            };
        default:
            return state
    }
};

