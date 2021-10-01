import React from "react";
import {useForm, Controller} from "react-hook-form";
import {useHistory} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #cccccc',
        borderRadius: '10px',
        boxShadow: '2px 2px 7px 0px #000000',
        background: 'linear-gradient(to bottom, #B34E30 0%, #DDFFFF 0%, #99B5C5 100%)'
    },
    form: {
        width: '90%',
        margin: '1rem 1rem',
    },
    submit: {
        marginTop: '1rem',
        marginBottom: '1rem'
    }
}));

function LoginUser() {
    const history = useHistory();
    const {handleSubmit, control} = useForm();
    const onSubmit = () => history.push("/todos");
    const classes = useStyles();

    return (
        <Container maxWidth ="xs">
            <CssBaseline>
                <div className = {classes.paper}>
                    <form className = {classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                                name = "Email Address"
                                control = {control}
                                defaultValue = ""
                                render={({field: {onChange, value}, fieldState: { error }}) => (
                                    <TextField variant = "outlined"
                                               margin = "normal"
                                               required
                                               fullWidth
                                               id = "email"
                                               label = "Email Address"
                                               name = "email"
                                               autoComplete = "email"
                                               autoFocus
                                               type = "email"
                                               value = {value}
                                               onChange = {onChange}
                                               error = {!!error}
                                               helperText = {error ? error.message : null}
                                    />
                                )}
                                rules={{
                                    required: 'Введите Email Address',
                                    // patern: {value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/i,
                                        patern: {value: "[^@\\s]+@[^@\\s]+\\.[^@\\s]+",
                                        message: 'Не соответсевует формату электронной почты'}
                                }}
                        />
                        <Controller
                            name = "password"
                            control = {control}
                            defaultValue = ""
                            render={({field: {onChange, value}, fieldState: { error }}) => (
                                <TextField variant = "outlined"
                                           margin = "normal"
                                           required
                                           fullWidth
                                           id = "password"
                                           label = "Password"
                                           name = "password"
                                           autoComplete = "current-password"
                                           autoFocus
                                           value={value}
                                           onChange={onChange}
                                           error={!!error}
                                           helperText={error ? error.message : null}
                                />
                            )}
                            rules={{
                                required: 'Введите пароль',
                                minLength: {value: 4, message: 'Введённый текст менее 4 букв'},
                            }}
                        />
                        <Button type = "submit"
                                fullWidth
                                variant = "contained"
                                color = "primary"
                                className = {classes.submit}> Sign In
                        </Button>
                    </form>
                </div>
            </CssBaseline>
        </Container>
    );
}

export default LoginUser;

// import React from "react";
// import {useForm} from "react-hook-form";
// import Button from "@material-ui/core/Button";
// import {useHistory} from "react-router-dom";
// import Grid from "@material-ui/core/Grid";
//
// const style = {
//     form: {
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         width: '100%'
//     }
// }
//
// function LoginUser() {
//     const history = useHistory();
//     const {register, handleSubmit, formState: {errors}} = useForm();
//     const onSubmit = () => history.push("/todos");
//
//     return (
//         <Grid container direction="row" justifyContent="center" alignItems="center">
//             <Grid container item xs={3}>
//                 <form style={style.form} onSubmit={handleSubmit(onSubmit)}>
//                     <label>login</label>
//                     <input {...register("login", {
//                         required: {value: true, message: "Email required"},
//                         pattern: {value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i, message: "Invalid email format"}
//                     })
//                            }
//                            placeholder="Input login"
//                            type="email"
//                     />
//                     {errors.login?.type === 'required' && <p>{errors.login.message}</p>}
//                     {errors.login?.type === 'pattern' && <p>{errors.login.message}</p>}
//                     <label>password</label>
//                     <input {...register("password", {
//                         required: {value: true, message: "Password required"},
//                         minLength: {value: 6, message: "Password length must be more than 5 symbols"}
//                     })}
//                            placeholder="Input password"/>
//                     {errors.password?.type === 'required' && <p>{errors.password.message}</p>}
//                     {errors.password?.type === 'minLength' && <p>{errors.password.message}</p>}
//                     <Button variant="contained"
//                             type="submit">
//                         Login
//                     </Button>
//                 </form>
//             </Grid>
//
//         </Grid>
//
//     )
// }
//
// export default LoginUser;
