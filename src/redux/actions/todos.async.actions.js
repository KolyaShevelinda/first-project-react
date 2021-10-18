import {addTodo, removeTodo, setTodos} from "./todos.actions";

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

export const addTodoAsync = (todo) => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://todo-base-627f7-default-rtdb.firebaseio.com/todos.json', {
                method: 'POST',
                body: JSON.stringify(todo)
            });
            const data = await response.json();
            todo.id = data.name;
            await fetch(`https://todo-base-627f7-default-rtdb.firebaseio.com/todos/${todo.id}.json`, {
                method: 'PUT',
                body: JSON.stringify(todo)
            });

            dispatch(addTodo(todo))
        }
        catch (error) {

        }
    };
};

export const  removeTodoAsync = (todoId) => {
    return async (dispatch) => {
        try {
            await fetch(`https://todo-base-627f7-default-rtdb.firebaseio.com/todos/${todoId}.json`, {
                method: 'DELETE',
            });

            dispatch(removeTodo(todoId))
        }
        catch (error) {

        }
    };
};


