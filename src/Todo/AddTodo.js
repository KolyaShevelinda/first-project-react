import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/actions/todos.actions";
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
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

    // TODO: add validation
    /*
    install react-hook-form
    const { register, handleSubmit,  formState: { errors } } = useForm();

     <input {...register("firstName",{required: true, minLength: 3})} />
      {errors.firstName?.type === 'required' && <p>First name is required</p>}
      {errors.firstName?.type === 'minLength' && <p>First name minimum 3 letter</p>}
     */


    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Добавить задачу
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Добавить задачу</DialogTitle>
                <DialogContent>
                    <TextField
                        value={value}
                        onChange={event => setValue(event.target.value)}
                        autoFocus
                        margin="dense"
                        id="name"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <form style={{marginBottom: '1rem'}} onSubmit={createTodo}>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose} type='submit'>Add todo</Button>
                    </form>
                 </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddTodo
