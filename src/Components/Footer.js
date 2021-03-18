import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../Styles/Footer.css";
import $ from "jquery";
import { IoLogoFacebook, IoLogoTwitter, IoLogoWhatsapp, IoIosArrowUp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import Logo from "../Assets/logo.jfif";


const Footer = () => {
  const upwardmove = () => {
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
  };

  return (
    <>
      <div className="home15">
        <div className="home16">
          <Container>
            <Row>
              <Col xs={12} sm={6} md={4} lg={3}>
                <div className="home18">
                  <h3 className="margsake">About Us</h3>
                  <p>
                    Musafirrana Travel is one of India's coolest travel companies, Where the goal is to target every age group and profession and make travel easy and economical on the pocket.
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <div className="home17">
                  <h3 className="margsake">Trending places</h3>
                  <ul>
                    <li>
                      <a className="linktohover" href="/musafirrana/package/5eNuP6yVxr4N0t5FvCrK">
                        Manali & Solang
                      </a>
                    </li>
                    <li>
                      <a className="linktohover" href="/musafirrana/package/jl2FdBVtgag4xQDoX4a0">
                        Kasol & Kheerganga
                      </a>
                    </li>
                    <li>
                      <a className="linktohover" href="/musafirrana/package/w2032Q5STg4uKuAytxPs">
                        Ladakh
                      </a>
                    </li>
                    <li>
                      <a className="linktohover" href="/musafirrana/package/rJ0H0czUVmHRkajEJhLi">
                        Prashar Lake
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <div className="home19">
                  <h3 className="margsake">Help & Support</h3>
                  <ul>
                    <li>
                      <a className="linktohover" href="/contact-us">
                        Contact Us
                      </a>
                    </li>

                    <li>
                      <a className="linktohover" href="/custom-package">
                        Custom Package
                      </a>
                    </li>
                    <li>
                      <a className="linktohover" href='/sign-up'>SignUp</a> / <a className="linktohover" href='/login'>Login</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <div className="home20">
                  <h3 className="margsake mm5">Follow Us</h3>
                  <div className="doob-marr-8">
                    <div>
                      <img className="logimg" src={Logo}></img>
                    </div>
                    <li>
                      <a href="jdfakkl"><IoLogoTwitter className="foot-icon" /></a>
                      <a href="jdfakkl"><IoLogoFacebook className="foot-icon" /></a>
                      <a href="jdfakkl"><IoLogoWhatsapp className="foot-icon" /></a>
                      <a href="jdfakkl"><AiFillInstagram className="foot-icon" /></a>
                    </li>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <div className="home21">
                <p>© 2021 Musafirrana Travels.</p>
                <p>All Rights Reserved.</p>
              </div>
            </Row>

          </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;


// <div className="foopart1">
// <Container>
//   <Row>
//     <Col md={6}>
//       <div className="foopart21">
//         <h3>Subscribe to our Newsletter</h3>
//         <p>
//           Get e-mail update about our latest products and special deals
//           and offers
//         </p>
//       </div>
//     </Col>
//     <Col md={6}>
//       <div className="foopart22">
//         <input placeholder="Enter Email Address" />
//         <button>Subscribe</button>
//       </div>
//     </Col>
//   </Row>
// </Container>
// </div>
// <div onClick={upwardmove} className="foopart2">
// <IoIosArrowUp class = "mnb" aria-hidden ="true"/>
// </div> 




// /*<Col sm={4}  className="text-center m-1">
// <a href="/" className="btn m-0 ">
//   <IoLogoTwitter className = "foot-icon"/>
// </a>
// </Col>

// <Col sm={12}  className="text-center m-1">
// <a href="/" className="btn m-0">
//   <IoLogoFacebook className = "foot-icon"/>
// </a>
// </Col>
// <Col sm={12}  className="text-center m-1">
// <a href="/" className="btn m-0">
//   <IoLogoWhatsapp className = "foot-icon"/>
// </a>
// </Col>*/
