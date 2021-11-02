import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addTodoAsync} from "../redux/actions/todos.async.actions";
import LoadingButton from './LoadingButton';
import {Modal} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '50%'
    },
    modalButtons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(1)
    },
    cancelButton: {
        marginRight: theme.spacing(1)
    }
}));

function AddTodo() {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {handleSubmit, control, reset} = useForm({
        defaultValues: {
            todo: ''
        }
    });
    const classes = useStyles();

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
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        reset();
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
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <div className={classes.paper}>
                    <h2>Добавить задачу</h2>
                    <form style={{marginBottom: '1rem'}} onSubmit={handleSubmit(createTodo)}>
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
                                minLenght: {value: 3, message: 'Введено меньше 3 символов'}
                            }}
                        />
                        <div className={classes.modalButtons}>
                            <Button
                                className={classes.cancelButton}
                                variant="contained"
                                onClick={handleClose}>Отмена</Button>
                            <Button
                                variant="contained"
                                color="primary"
                                type='submit'>Добавить</Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default AddTodo
