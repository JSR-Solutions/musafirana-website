import React, { useEffect, useState } from "react";
import firebase from "firebase";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import "../Styles/profile.css";
import { Button } from "react-bootstrap"
import Background from "../Assets/profile_background.png";
import Man from "../Assets/man.png";
import { Link } from "react-router-dom";
import { signout } from "../helpers/auth";
import { toast } from "react-toastify";
import Spinner from 'react-bootstrap/Spinner';

import $ from "jquery";

const Userdashboard = () => {
    const auth = firebase.auth();
    const db = firebase.firestore();

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [PhoneNo, setPhoneNo] = useState("");
    const [Address, setAddress] = useState("");
    const [Email, setEmail] = useState("");
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        fetchUserData();
    }, []);

    useEffect(() => {
        $(document).ready(function () {
            $(this).scrollTop(0);
        });
    }, []);


    let uid = "";
    const fetchUserData = async () => {


        await auth.onAuthStateChanged((user) => {
            if (user) {
                uid = user.uid;
                db.collection("Users")
                    .doc(uid)
                    .get()
                    .then(doc => {
                        setIsFetched(true);
                        const data = doc.data();
                        console.log(data);
                        if (data) {
                            setAddress(data.Address);
                            setFirstName(data.FirstName);
                            setLastName(data.LastName);
                            setEmail(data.EmailId);
                            setPhoneNo(data.PhoneNumber);
                        }
                    });

            } else {
                console.log("Signed Out");
            }
        });


    }


    const signouttt = () => {
        firebase.auth().signOut().then(function () {
            signout(() => {
                toast.success('Done !!!')

            })
        }).catch(function (error) {
            toast.error('There is problem with signout')
        });
    }
    return (
        <div>
            {isFetched ? <div><Header />

                <div className="h_base" style={{ backgroundImage: `url(${Background})` }}>
                    <div className="h_card">
                        <img className="user_img" src={Man} /><h1 className="hey_h1">Hey! {FirstName}</h1>
                        <br></br>
                        <br></br>
                        <div className="h_data">
                            <h2 className="detail_h2" style={{ textAlign: "center" }}>Your Details</h2>
                            <h3 className="labels" >Name: </h3> <p style={{ display: "inline" }}>{FirstName}  {LastName}</p><br></br>
                            <h3 className="labels" >Email address: </h3><p style={{ display: "inline" }}> {Email}</p><br></br>
                            <h3 className="labels" >Phone No: </h3><p style={{ display: "inline" }}>{PhoneNo}</p><br></br>
                            <h3 className="labels" >Address: </h3><p style={{ display: "inline" }}> {Address}</p><br></br>
                            <div className="h_btnn">
                                <Link to="/user/editdetails">
                                    <Button className="h_btnn1" variant="outline-warning">Change Details</Button></Link>
                                <Link to="/">
                                    <Button className="h_btnn2" onClick={signouttt} variant="outline-warning">Sign Out</Button></Link>
                                <Link to='/user/orders'>
                                    <Button className="h_btnn2" variant="outline-dark">Your Bookings</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer /></div> : <div className="loading-spinner"><Spinner animation="border" /></div>}
        </div>
    );
};

export default Userdashboard;