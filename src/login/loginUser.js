import React from "react";
import { useForm } from "react-hook-form";
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
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>login</label>
      <input {...register("login", {
        required: { value: true, message: "Email required" },
        pattern: { value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i, message: "Invalid email format" }
      })
             }
             placeholder="Input login"
             type="email"
      />
      {errors.login?.type === 'required' && <p>{errors.login.message}</p>}
      {errors.login?.type === 'pattern' && <p>{errors.login.message}</p>}
      <label>password</label>
      <input {...register("password", {
        required: { value: true, message: "Password required" },
        minLength: { value: 6, message: "Password length must be more than 5 symbols" }
      })}
             placeholder="Input password" />
      {errors.password?.type === 'required' && <p>{errors.password.message}</p>}
      {errors.password?.type === 'minLength' && <p>{errors.password.message}</p>}
      <Button style={styles.button}
              variant="contained"
              type="submit"
      >
        Login
      </Button>
    </form>
  )
}

export default LoginUser;
