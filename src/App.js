import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import TodoList from "./Todo/TodoList"
import Context from "./context"
import AddTodo from "./Todo/AddTodo";

function App() {
    const todoList = useSelector(state => state.todos)
    console.log(todoList)
    const [todos, setTodos] = React.useState()

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
            }
            return todo
            })
        )
    }
    
    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <Context.Provider value={{removeTodo, toggleTodo}}>
            <div className="wrapper">
                <h1>React tutorial</h1>
                <AddTodo />
                {todoList.length ? (
                    <TodoList todos={todoList} />) : (<p>No todos!!!</p>
                )}
            </div>
        </Context.Provider>

    )
}

export default App;
