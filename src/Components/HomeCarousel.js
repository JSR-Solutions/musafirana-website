import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Styles/HomeCarousel.css";


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