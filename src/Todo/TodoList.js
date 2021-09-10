import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";
import Context from "../context";


const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList(props) {
    const {toggleTodo} = useContext(Context)
    return (
        <ul style={styles.ul}>
            {props.todos.map((todo, index) => {
                return <TodoItem
                    todo={todo}
                    key={todo.id}
                    index={index}
                    onChange={toggleTodo.bind(null, todo.id)}
                />
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList