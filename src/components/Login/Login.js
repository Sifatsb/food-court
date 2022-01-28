import React, { useState } from 'react';
import './Login.css'
import { Button, TextField } from '@mui/material';
import firebase from '../../firebase'
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail  } from "firebase/auth";
import { useHistory } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
    const auth = getAuth(firebase);
    const [email, setEmail] = useState('')
    const history = useHistory();
    const [password, setPassword] = useState('')
    const [visibility, setVisibility] = useState('hidden');

    const btnLogin = (e) => {
        e.preventDefault()

        setVisibility('visible');


        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // alert('done')
                history.push('/profile')
            })
            .catch((error) => {
                setVisibility('hidden')
                alert(error)
            });

    }


    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }




    return (
        <div className="main-div picture">
            <form onSubmit={(e) => btnLogin(e)} className='form-level'>
                <TextField className='input'
                    helperText="Enter your email"
                    type='email'
                    label="Email"
                    variant="filled"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                        width: '300px'
                    }}
                />

                <TextField className='input'
                    helperText="Enter your password"
                    type='password'
                    label="Password"
                    variant="filled"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{
                        marginTop: '30px',
                        width: '300px'
                    }}
                />

                <Button onClick={ handleResetPassword } variant="outlined" color="error">
                    Reset Password
                </Button>


                <button type='submit' className="button">Login</button>
            </form>
            <CircularProgress 
            style={{ visibility: visibility, position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)' }} 
            color="secondary" 
            />
        </div>
    );
};

export default Login;