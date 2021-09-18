import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/actions/todos.actions";
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";

function AddTodo() {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);

    function createTodo(event) {
        event.preventDefault();
        dispatch(
            addTodo({
                title: value,
                id: Date.now(),
                completed: false
            })
        )
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <form>
            <Button variant="contained" onClick={handleClickOpen}>
                Add actions
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add action list</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Input name add action
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Add action"
                        id="name"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cansel</Button>
                    <Button onClick={createTodo}
                            value={value}
                            onChange={event => setValue(event.target.value)}>
                        Add todo
                    </Button>
                </DialogActions>
            </Dialog>
        </form>
    )
}

export default AddTodo

// import React, {useState} from "react";
// import {useDispatch} from "react-redux";
// import {addTodo} from "../redux/actions/todos.actions";
// import Button from "@material-ui/core/Button";
//
// const styles = {
//     input: {
//         marginRight: '1rem'
//     }
// }
//
// function AddTodo() {
//     const dispatch = useDispatch();
//     const [value, setValue] = useState('');
//
//     function createTodo(event) {
//         event.preventDefault();
//         dispatch(addTodo({
//             title: value,
//             id: Date.now(),
//             completed: false
//         }))
//     }
//
//     return (
//         <form style={{marginBottom: '1rem'}} onSubmit={createTodo}>
//             <input style={styles.input} value={value} onChange={event => setValue(event.target.value)}/>
//             <Button variant="contained" type='submit'>Add todo</Button>
//         </form>
//     )
// }
//
// export default AddTodo