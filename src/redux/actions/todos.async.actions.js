import {addMessage, addTodo, removeTodo, setTodos, toggleTodo} from "./todos.actions";

export const getTodosAsync = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://todo-base-627f7-default-rtdb.firebaseio.com/todos.json');
            if (!response.ok) {
                throw new Error('Ошибка при получении задач');
            }
            const todos = await response.json();
            const keys = Object.keys(todos);
            const formattedTodos = keys.map(key => {
                return {...todos[key], id: key}
            });

            dispatch(setTodos(formattedTodos))
        } catch (error) {
            dispatch(addMessage({
                msg: error.message,
                type: 'error',
                isOpen: true
            }))
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
            if (!response.ok) {
                throw new Error('Ошибка при добавлении задачи');
            }
            const data = await response.json();
            todo.id = data.name;
            await fetch(`https://todo-base-627f7-default-rtdb.firebaseio.com/todos/${todo.id}.json`, {
                method: 'PUT',
                body: JSON.stringify(todo)
            });

            dispatch(addTodo(todo))
        } catch (error) {
            dispatch(addMessage({
                msg: error.message,
                type: 'error',
                isOpen: true
            }))
        }
    };
};

export const removeTodoAsync = (todoId) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`https://todo-base-627f7-default-rtdb.firebaseio.com/todos/${todoId}.json`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Ошибка при удалении задачи');
            }
            dispatch(removeTodo(todoId))
        } catch (error) {
            dispatch(addMessage({
                msg: error.message,
                type: 'error',
                isOpen: true
            }))
        }
    };
};

export const updateTodoAsync = (todo) => {
    const updatedTodo = {...todo, completed: !todo.completed};
    return async (dispatch) => {
        try {
            const response = await fetch(`https://todo-base-627f7-default-rtdb.firebaseio.com/todos/${todo.id}.json`, {
                method: 'PUT',
                body: JSON.stringify(updatedTodo)
            });
            if (!response.ok) {
                throw new Error('Ошибка при изменении задачи');
            }
            dispatch(toggleTodo(todo.id))
        } catch (error) {
            dispatch(addMessage({
                msg: error.message,
                type: 'error',
                isOpen: true
            }))
        }
    }
};


