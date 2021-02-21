import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Styles/HomeCarousel.css";
import hotels from '../Assets/hotels.png'
import security from '../Assets/security.png'
import team from '../Assets/team.png'
import tag from '../Assets/tag.png'
import support from '../Assets/support.png'
import { Row, Col } from 'react-bootstrap'
import value from '../Assets/value.png'

function HomeCarousel() {
    return <div className="home-carousel">
        <Carousel>
            <Carousel.Item className="container-fluid carousel-item item-one">
                <div className='acarousel-div'>
                    <h1 className="carousel-title">You Only Live Once</h1>
                    <h4 className="carousel-subtitle">Make memories you will forever cherish</h4>
                </div>
            </Carousel.Item>
            <Carousel.Item className="container-fluid carousel-item item-two">
                <div className='acarousel-div'>
                    <h1 className="carousel-title">Take The Road Not Taken</h1>
                    <h4 className="carousel-subtitle">Travelling is what makes us feel alive</h4>
                </div>
            </Carousel.Item>
            <Carousel.Item className="container-fluid carousel-item item-three">
                <div className='acarousel-div'>
                    <h1 className="carousel-title">What's life without travelling?</h1>
                    <h4 className="carousel-subtitle">Don't spend your entire life in the place you were born</h4>
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
}

export default HomeCarousel;




// <div className="home-carousel-bottom">
//             <center><h2>Explore MusafirRana</h2></center>
//             <div className='services home-carousel-bottom1'>
//                 <Row>

//                     <Col lg={2} md={2}>
//                         <center>
//                             <img src={tag} />
//                             <h4>Unlimited</h4>
//                             <h6>Deals</h6>
//                         </center>
//                     </Col>
//                     <Col lg={2} md={2}>
//                         <center>
//                             <img src={support} />
//                             <h4>24/7</h4>
//                             <h6>Support</h6>
//                         </center>
//                     </Col>
//                     <Col lg={2} md={2}>
//                         <center>
//                             <img src={team} />
//                             <h4>200+</h4>
//                             <h6>Ground Expert</h6>
//                         </center>
//                     </Col>
//                     <Col lg={2} md={2}>
//                         <center>
//                             <img src={hotels} />
//                             <h4>450+</h4>
//                             <h6>Hotels</h6>
//                         </center>
//                     </Col>
//                     <Col lg={2} md={2}>
//                         <center>
//                             <img src={value} />
//                             <h4>Happy</h4>
//                             <h6>Clients</h6>
//                         </center>
//                     </Col>
//                     <Col lg={2} md={2}>
//                         <center>
//                             <img src={security} />
//                             <h4>100%</h4>
//                             <h6>Money-Safe</h6>
//                         </center>
//                     </Col>

//                 </Row>
//             </div>
//         </div>
