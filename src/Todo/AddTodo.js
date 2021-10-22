import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../redux/actions/todos.async.actions";
import LoadingButton from './LoadingButton';

function AddTodo() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { handleSubmit, control, reset } = useForm({
        defaultValues: {
            todo: ''
        }
    });

    async function createTodo(data) {
        handleClose();
        setIsLoading(true);
        await dispatch(addTodoAsync({
            title: data.todo,
            completed: false
        })
        );
        reset();
        setIsLoading(false);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <LoadingButton
                variant="contained"
                color="primary"
                loading={isLoading}
                onClick={handleClickOpen}
            >Добавить задачу
            </LoadingButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Добавить задачу</DialogTitle>
                <DialogContent>
                    <Controller
                        name="todo"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
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
                            minLength: { value: 3, message: 'Todo text must be at least 3 characters' }
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <form style={{ marginBottom: '1rem' }} onSubmit={handleSubmit(createTodo)}>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type='submit'>Add todo</Button>
                    </form>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddTodo
