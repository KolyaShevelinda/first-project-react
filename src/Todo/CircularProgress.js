import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    backDrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff'
    }
}));

function CircProgress() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    
    function getTodosProgress() {

    }
    
    function addTodoProgress() {

    }
    
    function removeTodoProgress() {

    }
    
    function updateTodoProgress() {

    }

    return (
        <Backdrop className={classes.backDrop} open={open}>
            <CircularProgress />
        </Backdrop>
    )
}

export default CircProgress