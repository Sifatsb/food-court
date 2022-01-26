import { TextField } from '@mui/material';
import React, { useState } from 'react';
import './SignUp.css';
import firebase from './../../firebase';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,} from "firebase/auth";
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';


const googleProvider = new GoogleAuthProvider();

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const auth = getAuth(firebase);

    const btnSignUp = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                // alert('done')
                // return <Redirect to="/profile/" />;
                history.push("/profile");
            })
            .catch((err) => {
                alert(err)
            })
    }

    
    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // const user = result.user;
                // console.log(user)
                history.push("/profile");
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    return (
        <div className="main-div">
            <h1>Sign up for start choose your food.</h1>
            <button onClick={handleGoogleSignIn} className="button">Sign Up With Google</button>
            <h4>------------------- or -------------------</h4>
            <h2>Sign up with your email address</h2>

            {/* <form className="form-level" action="">
                <label htmlFor="">Confirm your email</label>
                <input type="text" placeholder="Enter your email" />
                <label htmlFor="">Enter your password</label>
                <input type="text" placeholder="Enter your Password"/>
            </form> */}
            <form onSubmit={(e) => btnSignUp(e)} className='form-level'>
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
                    onChange={(event) => setPassword(event.target.value)}
                    sx={{
                        marginTop: '30px',
                        width: '300px'
                    }}
                />

                <button type='submit' className="button">Sign up</button>
            </form>

            {/* <Link to='/login'><span>login</span></Link> */}

            <h4>Have an account? <a className="login-link" href='/login'>Log in.</a></h4>
        </div>
    );
};

export default SignUp;