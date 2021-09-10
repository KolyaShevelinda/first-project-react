import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from "../redux/actions/todos.actions";

function AddTodo() {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    function createTodo(event) {
        event.preventDefault();
        dispatch(addTodo({
            title: value,
            id: Date.now(),
            completed: false
        }))
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={createTodo}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type='submit'>Add todo</button>
        </form>
    )
}

export default AddTodo