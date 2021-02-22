import React, { useState } from 'react';
import "../Styles/Login.css";
import login from "../Assets/login.svg";
import { Link, Redirect } from "react-router-dom";
import firebase from "firebase";
import { isAuth, authenticate } from '../helpers/auth'
import { toast, ToastContainer } from 'react-toastify'

const Login = ({ history }) => {

    const auth = firebase.auth();
    const [authState, setAuthState] = useState(false);
    const db = firebase.firestore()
    const [redir, setredir] = useState(false)

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    function signIn(e) {
        e.preventDefault();
        auth.signInWithEmailAndPassword(credentials.email, credentials.password)
            .then((userCredentials) => {
                var user = userCredentials.user;
                if (user.emailVerified) {
                    db.collection('Users').doc(user.uid).get()
                        .then((ress) => {
                            if (ress.data()) {
                                authenticate(ress.data(), () => {
                                    setAuthState(true);
                                    setCredentials({ email: "", password: "" });
                                    toast.success('Login Done !!!')
                                })
                            } else {
                                setredir(true);
                                toast.error('Please fill user detail first !!!')
                            }
                        })
                } else {
                    toast.error('Please confirm your email before sign in !!!')
                }
            })
            .catch((err) => {
                // console.log("Error signing in : " + err.message);
                toast.error(err.message)
            });
    }

    function handleChange(e) {
        const { name, value } = e.target;

        setCredentials((prev) => {
            return { ...prev, [name]: value }
        });
    }

    return (
        <div className="login-form">
            <ToastContainer />
            {redir ? <Redirect to="/user/detail" /> : null}
            {authState ? <Redirect to="/user/dashboard" /> : null}
            {isAuth() ? <Redirect to="/user/dashboard" /> : null}
            <div className="container auth-container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">
                            <h2 className="auth-title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" onChange={handleChange} name="email" value={credentials.email} placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" onChange={handleChange} name="password" value={credentials.password} placeholder="Password" />
                            </div>
                            <input onClick={signIn} type="submit" value="Login" className="btnn" />
                        </form>
                        <p className="social-text">New here? <Link className="auth-link" to="/sign-up">Register</Link></p>
                    </div>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>Unlock some great adventures</h3>
                        <p>Travel is the only thing you buy that makes you richer.</p>
                    </div>

                    <img src={login} className="image" alt="login-svg" />
                </div>
            </div>
        </div>
    );
};

export default Login;