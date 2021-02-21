import React, { useState } from 'react';
import "../Styles/Login.css";
import details from "../Assets/details.svg";
import firebase from "firebase";
import { Redirect } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'
import { isAuth } from '../helpers/auth'

const UserDetails = () => {
    const db = firebase.firestore();
    const auth = firebase.auth();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState('');
    const [registered, setRegistered] = useState(false);
    

    function handleChange(e) {
        const { name, value } = e.target;
        if (name === "firstname") {
            setFirstname(value);
        } else if (name === "lastname") {
            setLastname(value);
        } else if (name === "phonenumber") {
            setPhonenumber(value);
        } else if (name === "address") {
            setAddress(value);
        }
    }

    let uid = "";
    let email = "";

    const createUser = () => {
        db.collection('Users').doc(uid).set({
            uid: uid,
            FirstName: firstname,
            LastName: lastname,
            EmailId: email,
            PhoneNumber: phonenumber,
            Address: address,
        }).then(() => {
            setFirstname('');
            setLastname('');
            setPhonenumber('');
            setAddress('');
            setError('');
            setRegistered(true);
        }).catch(err => setError(err.message))
    }

    const addDetails = (e) => {
        e.preventDefault();
        if (firstname && phonenumber) {
            auth.onAuthStateChanged((user) => {
                if (user) {
                    console.log(user);
                    uid = user.uid;
                    email = user.email;
                    createUser();
                } else {
                    // console.log("Signed Out");
                    toast.error('Signed Out')
                }
            })
        } else {
            toast.error('Please input name and phone first !!!')
        }
    }

    return (
        <div className="login-form">
            <ToastContainer />
            {registered ? <Redirect to="/user/dashboard" /> : null}
            {isAuth() ? <Redirect to="/user/dashboard" /> : null}
            <div className="container auth-container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" onSubmit={addDetails} className="sign-in-form">
                            <h2 className="title">DETAILS</h2>
                            <div className="input-field">
                                <i className="fas fa-signature"></i>
                                <input type="text" onChange={handleChange} name="firstname" value={firstname} placeholder="First Name" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-signature"></i>
                                <input type="text" onChange={handleChange} name="lastname" value={lastname} placeholder="Last Name" />
                            </div>
                            {/* <div className="input-field">
                                    <i className="fas fa-envelope"></i>
                                    <input type="email" onChange={handleChange} name="email" value={email} placeholder="Email" />
                                </div> */}
                            <div className="input-field">
                                <i className="fas fa-phone"></i>
                                <input type="text" onChange={handleChange} name="phonenumber" value={phonenumber} placeholder="Phone Number" />
                            </div>
                            <div className="input-field">
                                <i className="far fa-address-card"></i>
                                <input type="text" onChange={handleChange} name="address" value={address} placeholder="Address" />
                            </div>
                            <input type="submit" value="Save" className="btn" />
                        </form>
                    </div>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel right-panel">
                    <img src={details} className="image" alt="details-svg" />
                </div>
            </div>
        </div>
    );
};

export default UserDetails;