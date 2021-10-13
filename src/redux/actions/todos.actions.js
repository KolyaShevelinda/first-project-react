import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    SET_TODOS
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




