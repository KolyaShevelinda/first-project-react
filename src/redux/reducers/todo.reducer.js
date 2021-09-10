import {ADD_TODO} from "../actionTypes";

const INITIAL_STATE = {
    todos: [
        // {id: 1, completed: false, title: 'Купить хлеб'},
        // {id: 2, completed: false, title: 'Купить масло'},
        // {id: 3, completed: false, title: 'Купить молоко'},
        // {id: 4, completed: false, title: 'Купить соль'}
    ]
};

export const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        default: return state
    }
};

