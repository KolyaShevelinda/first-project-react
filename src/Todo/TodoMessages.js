import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import {useDispatch, useSelector} from "react-redux";
import {resetMessages} from "../redux/actions/todos.actions";

function TodoMessages() {
    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();

    const handleClose = (message) => {
        message.isOpen = false;
        dispatch(resetMessages())
    };

    return (
        <div>
            {
                messages.map((message, index) => {
                    return (
                        <Snackbar key={index} open={message.isOpen} autoHideDuration={3000} onClose={() => handleClose(message)}>
                            <Alert onClose={handleClose} severity={message.type}>
                                {message.msg}
                            </Alert>
                        </Snackbar>
                    )
                })
            }
        </div>
    )
}

export default TodoMessages