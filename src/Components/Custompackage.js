import React, {useState} from "react";
import { Container } from "react-bootstrap";
import "../Styles/custompackage.css";
import Custom from "../Assets/custom.png";
import {toast} from "react-toastify";
import emailjs from 'emailjs-com';

function Custompac() {

   const[customPackage, setCustomPackage] = useState({fullName: "", email: "", phNo: "", destination: "", noOfPeople: "", budget: "", requirements: ""}) 

   function handleChange(event) {
      const {name, value} = event.target;
      setCustomPackage((prev) => {
         return {...prev, [name]:value}
      });
   }

   function sendEmail() {
         emailjs.send('service_wmmn1mc','template_hi5n6h4', customPackage, 'user_kOM812vqGT0AINxPmaGol')
         .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            toast.success("Mail Sent");
            setCustomPackage({fullName: "", email: "", phNo: "", destination: "", noOfPeople: "", budget: "", requirements: ""});
         }, function(err) {
            console.log('FAILED...', err);
            toast.error("There is an issue sending your request. Please try again later.");
         });
   }

  return (
    <div>
      <div data-aos="fade-down" className="heading-custom">
        <h2>Custom Package</h2>
        <h2>Custom Package</h2>
      </div>
      <div className="parentcustom">
        <Container data-aos="flip-left" className="contcustom">
          <div data-aos="flip-right" className="formBox">
            <form>
              <h2>Request custom package</h2>
              <div className="inputBox">
                <input type="text" name="fullName" value={customPackage.fullName} onChange={handleChange} required></input>
                <span className="sanpi"> Full Name</span>
              </div>
              <div className="inputBox">
                <input type="email" name="email" value={customPackage.email} onChange={handleChange} required></input>
                <span className="sanpi"> Email</span>
              </div>
              <div className="inputBox">
                <input type="text"  name="phNo" value={customPackage.phNo} onChange={handleChange} required></input>
                <span className="sanpi"> Contact Number</span>
              </div>
              <div className="inputBox">
                <input type="email"  name="destination" value={customPackage.destination} onChange={handleChange} required></input>
                <span className="sanpi"> Destination</span>
              </div>
              <div className="inputBox">
                <input type="email"  name="noOfPeople" value={customPackage.noOfPeople} onChange={handleChange} required></input>
                <span className="sanpi">No. of People</span>
              </div>
              <div className="inputBox">
                <input type="email"  name="budget" value={customPackage.budget} onChange={handleChange} required></input>
                <span className="sanpi">Budget</span>
              </div>
              <div className="inputBox">
                <textarea required  name="requirements" value={customPackage.requirements} onChange={handleChange}></textarea>
                <span className="sanpi"> Requirement</span>
              </div>
              <div className="inputBox">
                <input
                  onClick={sendEmail}
                  className="custonbty"
                  type="submit"
                  name=""
                  required
                  value="Send"
                ></input>
              </div>
            </form>
          </div>
          <div className="imgBox">
            <img src={Custom}></img>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Custompac;
