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
}

export const setTodos = (todos) => {
    return {
        type: SET_TODOS,
        payload: todos
    }
}

export const getTodosAsync = () => {
    return async (dispatch) => {
        try {
           const response = await fetch('https://todo-base-627f7-default-rtdb.firebaseio.com/todos.json')
           const todos = await response.json();
           const keys = Object.keys(todos);
           const formattedTodos = keys.map(key => {
               return {...todos[key], id: key}
           });

           dispatch(setTodos(formattedTodos))
        }
        catch (error) {

        }
    };
};

// return fetch('http://example.com/api/v1/registration', {
//     method: 'POST', //save
//     body: JSON.stringify(todo)
// })
//
// return fetch('http://example.com/api/v1/registration', {
//     method: 'DELETE',
// })


