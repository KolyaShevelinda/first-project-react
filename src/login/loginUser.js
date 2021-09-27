import React from "react";
// import {singIn} from "./LoginUser"
import {useForm} from "react-hook-form";
import Button from "@material-ui/core/Button";

const styles = {
    form: {
        width: '500px',
        height: '280px',
        border: '2px solid #030303',
        display: 'block',
        position: 'relative',
        margin: '0 auto',
        marginTop: '100px'
    },
    button: {
        display: 'block',
        position: 'relative',
        margin: '0 auto',
        padding: '10px 80px'
    }
}

function LoginUser() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    // function singIn(login, password) {
    //     const correctLogin = 'kolyashevelinda@gmail.com';
    //     const correctPassword = '123456789'
    //
    //     while (login !== correctLogin || password !== correctPassword) {
    //         if (login !== correctLogin) {
    //             continue
    //         }
    //     }
    // }

    return(
        <form style={styles.form } onSubmit={handleSubmit(onSubmit)}>
            <label>login</label>
            <input {...register("login", { required: true })}
                   placeholder="Input login"
                   type="email"
                   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
            {errors.login?.type === 'required' && "Input correct login"}
            <label>password</label>
            <input {...register("password", { required: true })}
                   placeholder="Input password" />
            {errors.password?.type === 'required' && "Input correct password"}
            <Button style={styles.button}
                    variant="contained"
                    type="submit" 
                    // onClick={singIn()}
            >
                    Login
            </Button>
        </form>
    )
}

export default LoginUser