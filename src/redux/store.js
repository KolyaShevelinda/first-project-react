import {createStore, applyMiddleware} from 'redux';
import {todoReducer} from "./reducers/todo.reducer";
import thunk from "redux-thunk";

export default createStore(todoReducer, applyMiddleware(thunk));