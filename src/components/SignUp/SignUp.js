import { TextField } from '@mui/material';
import React from 'react';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className="main-div">
            <h1>Sign up for start choose your food.</h1>
            <button className="button">Sign Up With Facebook</button>
            <h4>------------------- or -------------------</h4>
            <h2>Sign up with your email address</h2>

            {/* <form className="form-level" action="">
                <label htmlFor="">Confirm your email</label>
                <input type="text" placeholder="Enter your email" />
                <label htmlFor="">Enter your password</label>
                <input type="text" placeholder="Enter your Password"/>
            </form> */}

            <TextField
            helperText="Enter your email"
            label="Email"
            variant="filled"
            sx={{
                width:'300px'
            }}
            />

            <TextField
            helperText="Enter your password"
            label="Password"
            variant="filled"
            sx={{
                marginTop:'30px',
                width:'300px'
            }}
            />

            <button className="button">Sign up</button>
            <h4>Have an account? <a className="login-link" href="">Log in.</a></h4>


        </div>
    );
};

export default SignUp;