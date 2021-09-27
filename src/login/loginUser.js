import React from "react";
import {useForm} from "react-hook-form";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const style = {
    form: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    }
}

function LoginUser() {
    const history = useHistory();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => history.push("/todos");

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid container item xs={6}>
                <form style={style.form} onSubmit={handleSubmit(onSubmit)}>
                    <label>login</label>
                    <input {...register("login", {
                        required: {value: true, message: "Email required"},
                        pattern: {value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i, message: "Invalid email format"}
                    })
                           }
                           placeholder="Input login"
                           type="email"
                    />
                    {errors.login?.type === 'required' && <p>{errors.login.message}</p>}
                    {errors.login?.type === 'pattern' && <p>{errors.login.message}</p>}
                    <label>password</label>
                    <input {...register("password", {
                        required: {value: true, message: "Password required"},
                        minLength: {value: 6, message: "Password length must be more than 5 symbols"}
                    })}
                           placeholder="Input password"/>
                    {errors.password?.type === 'required' && <p>{errors.password.message}</p>}
                    {errors.password?.type === 'minLength' && <p>{errors.password.message}</p>}
                    <Button variant="contained"
                            type="submit"
                    >
                        Login
                    </Button>
                </form>
            </Grid>

        </Grid>

    )
}

export default LoginUser;
