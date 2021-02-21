import React, { useEffect, useState } from "react";
import firebase from "firebase";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/AllBookings.css";
import { Col, Row, Button } from "react-bootstrap";

const Allbookings = () => {
  const [booking, setBookings] = useState([]);
  const db = firebase.firestore();

  useEffect(() => {
    fetchBookings();
  }, []);

 const fetchBookings = () => {
     setBookings([]);
     db.collection("Orders").get().then((res)=>{
         res.forEach((doc) => {
             const id = doc.id;
             const data = doc.data();
             setBookings((prev) => {
                 return [...prev, {_id : id, data : data}];
             });
         });
     });
 }

 const deleteBooking = (id) => {
     db.collection("Orders").doc(id).delete().then(() => {
         fetchBookings();
     })
 }

  return (
    <div>
      <Header />
      <div className="all-booking-heading">
          <h1>All Bookings</h1>
      </div>
      <div className="bookings-div">
          <Row className="bookings-row">
          {booking && booking.map((book, index) => {
              return <Col key={book._id} className="bookings-card" lg={3} md={4} sm={12}>
                  <div className="single-booking">
                      <div><h6>Booking made by : {book.data.name}</h6></div>
                      <div><h6>Email Address : {book.data.emailId}</h6></div>
                      <div><h6>Phone Number : {book.data.PhoneNumber}</h6></div>
                      <div><h6>Destination : {book.data.packageName}</h6></div>
                      <div><h6>Package Type : {book.data.packageType}</h6></div>
                      <div><h6>Package Price : {book.data.packagePrice}</h6></div>
                      <div><h6>Booking Date : {book.data.Timestamp}</h6></div>
                      <div><Button onClick = {() => {deleteBooking(book._id)}} className="delete-booking" style={{padding: "8px"}} >Delete</Button></div>
                  </div>
              </Col>
          })}
          </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Allbookings;
