import React, { useEffect, useState } from "react";
import firebase from "firebase";
import Header from './Header';
import Footer from './Footer';
import "../Styles/profile.css";
import { Button } from "react-bootstrap"
import Background from "../Assets/profile_background.png";
import Man from "../Assets/man.png";
import { Link } from "react-router-dom";
import {signout} from "../helpers/auth";
import {toast} from "react-toastify";
import Spinner from 'react-bootstrap/Spinner';
import $ from "jquery";


function ProfilePage(){
    const auth = firebase.auth();
    const db = firebase.firestore();
    
    useEffect(() => {
        $(document).ready(function () {
          $(this).scrollTop(0);
        });
      }, []);

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [PhoneNo, setPhoneNo] = useState("");
    const [Address, setAddress] = useState("");
    const [Email, setEmail] = useState("");
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        fetchUserData();
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
                        setAddress(data.Address);
                        setFirstName(data.FirstName);
                        setLastName(data.LastName);
                        setEmail(data.EmailId);
                        setPhoneNo(data.PhoneNumber);
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
    

    return(
        
    );
}
export default ProfilePage;
