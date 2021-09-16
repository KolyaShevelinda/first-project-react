import React from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from "react-redux";
import {removeTodo, toggleTodo} from "../redux/actions/todos.actions";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({todo, index}) {
    const dispatch = useDispatch();
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    function updateTodo(id) {
        dispatch(toggleTodo(id))
    }

    function deleteTodo(id) {
        dispatch(removeTodo(id))
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    style={styles.input}
                    onChange={() => updateTodo(todo.id)} />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button className='rm' onClick={deleteTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem