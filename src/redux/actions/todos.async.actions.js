import {addTodo, setTodos} from "./todos.actions";

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

export const addTodoAsync = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://todo-base-627f7-default-rtdb.firebaseio.com/todos.json', {
                method: 'POST',
                body: JSON.stringify(todo)
            });
            const todo = await response.json();

            dispatch(addTodo(todo))
        }
        catch (error) {

        }
    };
};

export const  removeTodoAsync = () => {
    return async (dispatch) => {
        try {

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