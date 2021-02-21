import React, { useEffect, useState } from 'react';
import { isAuth } from '../helpers/auth'
import firebase from 'firebase'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/myorder.css"
import {Row} from "react-bootstrap";
import Ordercard from "../Components/ordercard"

const Myorder = () => {
    const [myorder, setmyorder] = useState([])
    const db = firebase.firestore()

    useEffect(() => {
        setmyorder([])
        db.collection('Orders').where('userId', '==', `${isAuth().uid}`).get()
            .then((res) => {
                res.forEach((doc) => {
                    setmyorder((a) => [...a, { data: doc.data(), id: doc.id }])
                })
            })
    }, [])

    return (
        <div>
            <Header/>
            <div className="h_order_base">
                <h1 className="booking_h1">Your Bookings</h1>
                <br></br>
                <div className="h_order">
                    
                   {
                    myorder && myorder.map((n,m) =>{
                        
                        return(
                            <div className="h_orderdiv">
                            <h3 >Booking no: {m+1}</h3>
                            <Ordercard order={n}/>
                            </div>
                        )
                    }
                    )}
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Myorder;