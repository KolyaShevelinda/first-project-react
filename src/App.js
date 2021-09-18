import React from "react"
import {useSelector} from "react-redux"
import TodoList from "./Todo/TodoList"
import AddTodo from "./Todo/AddTodo";

function App() {
    const todoList = useSelector(state => state.todos)

    return (
        <div className="wrapper">
            <h1>React tutorial</h1>
            <AddTodo/>
            {todoList.length ? (<TodoList todos={todoList}/>) : (<p>No todos!!!</p>)}
        </div>
    )
}

export default App;
