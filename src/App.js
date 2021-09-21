import React from "react"
import {useSelector} from "react-redux"
import TodoList from "./Todo/TodoList"
import AddTodo from "./Todo/AddTodo";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

function App() {
    const todoList = useSelector(state => state.todos)

    return (
        <div className="wrapper">
            <Container maxWidth="md">
                <h1 style={{textAlign: 'center'}}>Список задач</h1>
                <Box textAlign='center'>
                    <AddTodo/>
                </Box>
            </Container>
            {todoList.length ? (<TodoList todos={todoList}/>) : (<h2 style={{textAlign: 'center'}}>Задач нет</h2>)}
        </div>
    )
}

export default App;
