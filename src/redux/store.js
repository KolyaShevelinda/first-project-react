import {createStore} from 'redux'
import {todoReducer} from "./reducers/todo.reducer";

export default createStore(todoReducer)