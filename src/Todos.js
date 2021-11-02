import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import TodoList from "./Todo/TodoList"
import AddTodo from "./Todo/AddTodo";
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import {getTodosAsync} from "./redux/actions/todos.async.actions";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
    loading: {
        marginRight: '10px',
        position: 'absolute',
        left: 'calc(50% - 29px)',
        top: '45%'
    }
}

function Todos() {
    const todoList = useSelector(state => state.todos);
    const history = useHistory();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    function logout() {
        history.push("/")
    }

    useEffect(() => {
        const getTodoList = async () => {
            setIsLoading(true);
            await dispatch(getTodosAsync());
            setIsLoading(false);
        }
        getTodoList();
    }, [dispatch]);

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
            { isLoading && <CircularProgress
                size={58}
                style={styles.loading} />}
            { !isLoading && <TodoList todos={todoList}/> }
        </div>
    )
}

export default Todos;
