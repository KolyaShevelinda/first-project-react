import React from "react";
import {useForm} from "react-hook-form";

function LoginUser() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <input {...register("lastName")} />

            <input type="submit" />
        </form>
    )
}

export default LoginUser