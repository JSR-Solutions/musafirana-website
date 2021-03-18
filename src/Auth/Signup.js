import React, { useState } from 'react';
import "../Styles/Login.css";
import register from "../Assets/sign up.svg";
import { Link, Redirect } from "react-router-dom";
import firebase from "firebase";
import { toast, ToastContainer } from 'react-toastify'
import { isAuth } from '../helpers/auth'

const Signup = () => {

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [authstate, setAuthstate] = useState(false);
    function handleChange(e) {
        const { name, value } = e.target;
        setCredentials((prev) => {
            return { ...prev, [name]: value }
        });
    }

    const auth = firebase.auth();

    function signUp(e) {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then((userCredentials) => {
                const user = userCredentials.user;

                const myURL = { url: 'https://musafirranatravels.com/' }
                user.sendEmailVerification(myURL).then(() => {
                    toast.success('Check your email inbox !!!')
                    setCredentials({ email: "", password: "" });
                })
                    .catch((err) => {
                        toast.error(err.message)
                    })
                firebase.auth().signOut()
                setAuthstate(true);
            })
            .catch((err) => {
                toast.error(err.message)
            });
    }

    return (
        <div className="login-form">
            <ToastContainer />
            {authstate ? <Redirect to="/login" /> : null}
            {isAuth() ? <Redirect to="/user/dashboard" /> : null}
            <div className="container auth-container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">
                            <h2 className="auth-title">Sign Up</h2>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" onChange={handleChange} name="email" value={credentials.email} placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" onChange={handleChange} name="password" value={credentials.password} placeholder="Password" />
                            </div>
                            <input type="submit" value="Sign Up" onClick={signUp} className="btnn" />
                        </form>

                        <p className="social-text">Already registered? <Link to="/login" className="auth-link">Sign in</Link></p>
                    </div>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel right-panel">
                    <div className="content">
                        <h3>Sign up to a world of possibilities</h3>
                        <p>The world is a book and those who do not travel read only one page.</p>
                    </div>

                    <img src={register} className="image" alt="register-svg" />
                </div>
            </div>
        </div>
    );
};

export default Signup;