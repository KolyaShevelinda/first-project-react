import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    SET_TODOS,
    RESET_MESSAGES,
    ADD_MESSAGE
}
    from "../actionTypes";

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
};

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id
    }
};

export const setTodos = (todos) => {
    return {
        type: SET_TODOS,
        payload: todos
    }
};

export const resetMessages = () => {
    return {
        type: RESET_MESSAGES
    }
};

export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        payload: message
    }
};
