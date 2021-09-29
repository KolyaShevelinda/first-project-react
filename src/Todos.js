import React from "react"
import {useSelector} from "react-redux"
import TodoList from "./Todo/TodoList"
import AddTodo from "./Todo/AddTodo";
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

function Todos() {
    const todoList = useSelector(state => state.todos)
    const history = useHistory();

    function logout() {
        history.push("/")
    }

    return (
        <div className="wrapper" style={{paddingTop: '0'}}>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" onClick={logout}>Logout</Button>
                </Toolbar>
            </AppBar>
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

export default Todos;
