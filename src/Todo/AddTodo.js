import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/actions/todos.actions";
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import {useForm, Controller} from "react-hook-form";

function AddTodo() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const {handleSubmit, control, reset} = useForm({
        defaultValues: {
            todo: ''
        }
    });

    function createTodo(data) {
        dispatch(
            addTodo({
                title: data.todo,
                id: Date.now(),
                completed: false
            })
        );
        handleClose();
        reset()
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Добавить задачу
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Добавить задачу</DialogTitle>
                <DialogContent>
                    <Controller
                        name="todo"
                        control={control}
                        defaultValue=""
                        render={({field: {onChange, value}, fieldState: {error}}) => (
                            <TextField
                                value={value}
                                onChange={onChange}
                                autoFocus
                                margin="dense"
                                id="todo"
                                fullWidth
                                variant="filled"
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                        rules={{
                            required: 'Todo text required',
                            minLength: {value: 3, message: 'Todo text must be at least 3 characters'}
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <form style={{marginBottom: '1rem'}} onSubmit={handleSubmit(createTodo)}>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type='submit'>Add todo</Button>
                    </form>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddTodo
