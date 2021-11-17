import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import  {signInWithEmailAndPassword, getAuth}  from "firebase/auth";
import fbApp from '../fb'

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #cccccc',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px 0px #0000006b',
        minHeight: '264px'
    },
    form: {
        width: '400px',
        margin: '1rem 1rem',
    },
    submit: {
        marginTop: '1rem',
        marginBottom: '1rem'
    },
    container: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

function LoginUser() {
    const history = useHistory();
    const { handleSubmit, control } = useForm();
    const classes = useStyles();
    const auth = getAuth();

    const onSubmit = async (data) => {
        try {
            const user = await signInWithEmailAndPassword(auth, data.email, data.password);
            console.log(user);
            history.push("/todos");
        } catch(error) {
            console.log(error);
        }
    };

    return (
        <Container maxWidth="md" className={classes.container}>
            <CssBaseline>
                <div className={classes.paper}>
                    <form noValidate className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    type="email"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                            rules={{
                                required: 'Введите Email',
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                                    message: 'Не соответсевует формату электронной почты'
                                }
                            }}
                        />
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                            rules={{
                                required: 'Введите пароль',
                                minLength: { value: 6, message: 'Длина пароля не меньше 6 символов' },
                            }}
                        />
                        <Button type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}>Sign In
                        </Button>
                    </form>
                </div>
            </CssBaseline>
        </Container>
    );
}

export default LoginUser;

