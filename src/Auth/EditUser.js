import react, { useState, useEffect } from "react";
import firebase from "firebase";
import { Button } from "react-bootstrap";
import { Row, Col, Form } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../Styles/AddPackage.css";
import {Redirect} from "react-router-dom"
import $ from "jquery";






function EditUser() {
    const auth = firebase.auth();
    let uid = '';
    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const [phoneno, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");
    const [email,setEmail]= useState("");
    const [updatestate,setupdateState]= useState(false);
    

    useEffect(() => {
        $(document).ready(function () {
          $(this).scrollTop(0);
        });
      }, []);

    function handleChange(event) {
        const { name, value } = event.target;
        if (name == "fname") {
            setFirstName(value);
        } else if (name == "lname") {
            setLastName(value);
        } else if (name == "phoneno") {
            setPhoneNo(value);
        } else if (name == "address") {
            setAddress(value);
        } 
    }

    const fetchUserData = async () => {


        await auth.onAuthStateChanged((user) => {
            if (user) {
                uid = user.uid;
                db.collection("Users")
                    .doc(uid)
                    .get()
                    .then(doc => {
                        const data = doc.data();
                        console.log(data);
                        setAddress(data.Address);
                        setFirstName(data.FirstName);
                        setLastName(data.LastName);
                        setPhoneNo(data.PhoneNumber);
                        setEmail(data.EmailId)
                    });

            } else {
                console.log("Signed Out");
            }
        });
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    const db = firebase.firestore();
    const storage = firebase.storage();

    async function editUserdetails(event) {
        event.preventDefault();
        await auth.onAuthStateChanged((user) => {
            if (user) {
                uid = user.uid;

                db.collection("Users").doc(uid).set({
                    Address: address,
                    FirstName: fname,
                    LastName: lname,
                    PhoneNumber: phoneno,
                    EmailId: email
                }).then(() => {
                    setAddress("");
                    setFirstName("");
                    setLastName("");
                    setPhoneNo("");
                    setupdateState(true);
                });
            }
         } );}

    return (
        
        <div>
        {updatestate ? <Redirect to = "/user/dashboard"/>: null}
        <Header/>
            <div className="add-package-form-section">
                <h2 className="add-package-form-section-title">Basic Details</h2>
                <hr />
                <Form className="form-add-package">
                    <Form.Group className="add-package-form-group" controlId="user-Fname">
                        <Form.Label className="add-package-form-label">First Name</Form.Label>
                        <Form.Control onChange={handleChange} className="add-package-form-input" type="text" name="fname" value={fname} />
                    </Form.Group>
                    <Form.Group className="add-package-form-group" controlId="user-Lname">
                        <Form.Label className="add-package-form-label">Last Name</Form.Label>
                        <Form.Control onChange={handleChange} className="add-package-form-input" type="text" name="lname" value={lname} />
                    </Form.Group>
                    <Form.Group className="add-package-form-group" controlId="user-Phone-no">
                        <Form.Label className="add-package-form-label">Phone No</Form.Label>
                        <Form.Control onChange={handleChange} className="add-package-form-input" type="text" name="phoneno" value={phoneno} />
                    </Form.Group>
                    <Form.Group className="add-package-form-group" controlId="user-Address">
                        <Form.Label className="add-package-form-label">Address</Form.Label>
                        <Form.Control onChange={handleChange} className="add-package-form-input" type="text" name="address" value={address} />
                    </Form.Group>
                </Form>
            </div>
            <div className="add-package-form-section">
                <Form className="form-add-package">
                    <Form.Group>
                        <Button className="add-package-button" onClick={editUserdetails} variant="primary">Update Details</Button>
                    </Form.Group>
                </Form>
                <Footer/>
            </div>
        </div>
    );

}
export default EditUser;