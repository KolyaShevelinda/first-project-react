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
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";


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
    const snackbars = useSelector(state => state.snackbars);
    const history = useHistory();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [open, setIsOpen] = useState(true);

    function logout() {
        history.push("/")
    }

    function handleClose() {
        setIsOpen(false);
        console.log('hello');
    }

    useEffect(() => {
        const getTodoList = async () => {
            setIsLoading(true);
            await dispatch(getTodosAsync());
            setIsLoading(false);
        }
        getTodoList();
        document.title = 'Todos';
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
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Todos;
