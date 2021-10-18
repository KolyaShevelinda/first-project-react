import React from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from "react-redux";
import {toggleTodo} from "../redux/actions/todos.actions";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Container from "@material-ui/core/Container";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {removeTodoAsync} from "../redux/actions/todos.async.actions";


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
    }
}

function TodoItem({todo, index}) {
    const dispatch = useDispatch();
    const classes = [];
    const label = {inputProps: {'aria-label': 'Checkbox'}};
    const [dense] = React.useState(false);

    if (todo.completed) {
        classes.push('done')
    }

    function updateTodo(id) {
        dispatch(toggleTodo(id))
    }

    function deleteTodo(id) {
        dispatch(removeTodoAsync(id))
    }

    return (
        <Container maxWidth="md">
            <List dense={dense}>
                    <ListItem style={styles.li} role={undefined} dense>
                        <ListItemIcon>
                            <Checkbox {...label}
                                      checked={todo.completed}
                                      style={styles.checked}
                                      onChange={() => updateTodo(todo.id)}/>
                        </ListItemIcon>
                        <ListItemText primary={todo.title} onClick={() => updateTodo(todo.id)}/>
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