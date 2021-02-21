import React , {useState} from "react";
import "../Styles/Contact.css";
import { Col, Row, Container } from "react-bootstrap";
import Ilus from "../Assets/contac.png";
import {
  AiFillInstagram,
} from "react-icons/ai";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoMdMail,
  IoIosCall,
  IoMdNavigate,
} from "react-icons/io";

import { toast } from "react-toastify";
import emailjs from 'emailjs-com';

function Contact() {

  const [contactMessage, setContactMessage] = useState({firstName: "", lastName: "", email: "", phNo: "", message: ""});

  function handleChange(event) {
    const {name, value} = event.target;
    setContactMessage((prev) => {
      return {...prev, [name] : value}
    });
  }

  function sendEmail() {
    emailjs.send('service_wmmn1mc','template_zfgcu9l', contactMessage, 'user_kOM812vqGT0AINxPmaGol')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       toast.success("Mail Sent");
       setContactMessage({firstName: "", lastName: "", email: "", phNo: "", message: ""});
    }, function(err) {
       console.log('FAILED...', err);
       toast.error("There is an issue sending your request. Please try again later.");
    });
}

  return (
    <div className="topicontac">
      <div className="heading">
        <h2>Contact Us</h2>
        <h2>Contact Us</h2>
      </div>
      <section className="nsection">

        <Container className="contactcon ">
          <img className="ilus-img" src={Ilus}></img>
          <div className="contact-info ">
            <div>
              <h2 className="spea">Contact Info</h2>
              <ul className="coninfo">
                <li>
                  <span>
                  <IoMdNavigate className = "tyu"/>
                  </span>
                  <span>
                    1st line
                    <br /> 2nd line <br />{" "}
                  </span>
                </li>
                <li>
                  <span>
                    <IoMdMail className = "tyu"/>
                  </span>
                  <span>musafirranatravels@gmail.com </span>
                </li>
                <li>
                  <span>
                    {" "}
                    <IoIosCall className = "tyu"/>
                  </span>
                  <span>+91-9868472340</span>
                </li>
              </ul>
              <ul className="contac-sci">
                <li>
                  <a href="#">
                    <AiFillInstagram className="sociocon" />{" "}
                  </a>
                  <a href="#">
                    <IoLogoFacebook className="sociocon" />{" "}
                  </a>
                  <a href="#">
                    <IoLogoTwitter className="sociocon" />{" "}
                  </a>
                  <a href="#">
                    <IoLogoWhatsapp className="sociocon" />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contactform ">
            <h2>Send an Enquiry</h2>
            <div className="formbox ">
              <Row>
                <Col md={6} sm={12} xs={12} className="inputbox w50 ">
                  <input type="text" required name="firstName" value={contactMessage.firstName} onChange={handleChange}></input>
                  <span className="kspan">First Name</span>
                </Col>
                <Col md={6} sm={12} xs={12} className="inputbox w50 ">
                  <input type="text" required name="lastName" value={contactMessage.lastName} onChange={handleChange}></input>
                  <span className="kspan">Last Name</span>
                </Col>
              </Row>
              <Row>
                <Col md={6} sm={12} xs={12} className="inputbox w50">
                  <input type="text" required name="email" value={contactMessage.email} onChange={handleChange}></input>
                  <span className="kspan">Email Address</span>
                </Col>
                <Col md={6} sm={12} xs={12} className="inputbox w50">
                  <input type="text" required name="phNo" value={contactMessage.phNo} onChange={handleChange}></input>
                  <span className="kspan">Mobile Number</span>
                </Col>
              </Row>
              <div className="inputbox w100">
                <textarea required name="message" value={contactMessage.message} onChange={handleChange}></textarea>
                <span >Write your message here</span>
              </div>
              <div className="inputbox w100 ">
                <input className="extrbt" onClick={sendEmail} type="submit" value="Send"></input>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}

export default Contact;
