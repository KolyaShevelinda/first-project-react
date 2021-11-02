import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Container from "@material-ui/core/Container";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {removeTodoAsync, updateTodoAsync} from "../redux/actions/todos.async.actions";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '5px'
    },
    checked: {
        marginRight: '1rem'
    },
    loading: {
        position: 'absolute',
        left: '50%'
    }
}

function TodoItem({todo, index}) {
    const dispatch = useDispatch();
    const classes = [];
    const label = {inputProps: {'aria-label': 'Checkbox'}};
    const [dense] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);


    if (todo.completed) {
        classes.push('done')
    }

    async function updateTodo(todo) {
        setIsLoading(true);
        await dispatch(updateTodoAsync(todo));
        setIsLoading(false);
    }

    async function deleteTodo(id) {
        setIsLoading(true);
        await dispatch(removeTodoAsync(id));
        setIsLoading(false);
    }

    return (
        <Container maxWidth="md">
            <List dense={dense}>
                    <ListItem style={styles.li} role={undefined} dense>
                        { isLoading && <CircularProgress
                            size={18}
                            style={{ 'marginRight': '10px', position: 'absolute', left: '50%'}} />}
                        <ListItemIcon>
                            <Checkbox {...label}
                                      checked={todo.completed}
                                      style={styles.checked}
                                      onChange={() => updateTodo(todo)}/>
                        </ListItemIcon>
                        <ListItemText primary={todo.title} onClick={() => updateTodo(todo)}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="comments" onClick={deleteTodo.bind(null, todo.id)}>
                                <DeleteIcon color="primary"/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
            </List>
        </Container>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem