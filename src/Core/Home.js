import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import "../Styles/Home.css";
import { Col, Row } from 'react-bootstrap';
import PackageCard from "../Components/PackageCard";
import OtherPackageCard from "../Components/OtherPackageCard";
import firebase from "firebase";
import HomeCarousel from "../Components/HomeCarousel";
import Sharebutton from '../Components/Sharebutton'
import Spinner from 'react-bootstrap/Spinner';
import Review from "../Components/review"
import $ from "jquery";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import team from '../Assets/team.png'
import tag from '../Assets/tag.png'
import support from '../Assets/support.png'
import value from '../Assets/value.png'
import hotels from '../Assets/hotels.png'
import security from '../Assets/security.png';
import { Hourglass } from 'react-css-spinners'

const Home = () => {

    const [trendingPackages, setTrendingPackages] = useState([]);
    const [otherPackages, setOtherPackages] = useState([]);
    const db = firebase.firestore();
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        fetchPackages();
    }, []);

    useEffect(() => {
        $(document).ready(function () {
            $(this).scrollTop(0);
        });
    }, []);

    const fetchPackages = () => {
        setOtherPackages([]);
        setTrendingPackages([]);
        db.collection('packages').get().then((res) => {
            res.forEach((doc) => {
                let trending = doc.data().trending;
                if (trending) {
                    setIsFetched(true);
                    setTrendingPackages((prev) => {
                        return [...prev, { data: doc.data(), _id: doc.id }];
                    });
                } else {
                    setOtherPackages((prev) => {
                        return [...prev, { data: doc.data(), _id: doc.id }];
                    });
                }
            });
        });
    }

    const responsive = {
        0: { items: 1 },
        619: { items: 2 },
        920: { items: 3 },
        1220: { items: 4 },
        // 1400: { items: 4 }
    };
    const items = otherPackages.map((n, m) => {
        return <OtherPackageCard pckg={n} key={m} />
    });

    return (
        <div>{isFetched ? <div>
            <Header />
            <Sharebutton />
            <div className="home">

                <HomeCarousel />
              <div data-aos="flip-up" className="banner3">
                
                <div className='services'>
                  <Row>

                   
                    <Col lg={4} md={4}>
                      <center>
                        <img src={support} />
                        <h4>24/7</h4>
                        <h6>Support</h6>
                      </center>
                    </Col>
                  
                    <Col lg={4} md={4}>
                      <center>
                        <img src={value} />
                        <h4>Happy</h4>
                        <h6>Clients</h6>
                      </center>
                    </Col>
                    <Col lg={4} md={4}>
                      <center>
                        <img src={security} />
                        <h4>100%</h4>
                        <h6>Money-Safe</h6>
                      </center>
                    </Col>

                  </Row>
                </div>
              </div>

                <div className="home-packages">
                    <div className="trending-packages">
                        <div className="trending-title">
                            <h1 className="title-trending">Trending
                        <span className="title-trending" style={{ color: "#fff" }}> Packages</span></h1>

                        </div>
                        <div className="packages-trending">
                            <Row className="trending-packages-row">
                                {
                                    trendingPackages && trendingPackages.map((n, m) => {
                                        if (m < 3) {
                                            return (
                                                <Col sm={6} md={6} lg={4} xl={3} key={m}>
                                                    <PackageCard pckg={n} />
                                                </Col>
                                            )
                                        }
                                    }
                                    )}
                            </Row>
                        </div>
                    </div>
                    <div className="other-packages">
                        <div className="trending-title">

                            <h1 className="title-other">Our
                        <span className="title-other"> Packages</span></h1>
                        </div>
                        <div className="packages-trending">
                            <Row className="trending-packages-row">
                                <AliceCarousel
                                    responsive={responsive}
                                    items={items}
                                    fadeOutAnimation={true}
                                    disableButtonsControls={false}
                                    disableDotsControls={true}
                                    infinite={true}
                                    autoPlayInterval={2500}
                                    autoPlayControls={false}
                                    autoPlayStrategy={"all"}
                                    autoPlay={true}
                                    mouseTracking={true}
                                    infinite
                                />
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: "100%" }}>
                <Review />
            </div>
            <Footer />
        </div> : <div className="loading-spinner"><Hourglass color="#fdfa56" /></div>}</div>
    );
};

export default Home;