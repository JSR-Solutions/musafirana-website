import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import "../Styles/Home.css";
// import Typical from 'react-typical';
import { Col, Row } from 'react-bootstrap';
import PackageCard from "../Components/PackageCard";
import OtherPackageCard from "../Components/OtherPackageCard";
import firebase from "firebase";
import HomeCarousel from "../Components/HomeCarousel";
import Sharebutton from '../Components/Sharebutton'
import Spinner from 'react-bootstrap/Spinner';
import Review from "../Components/review"
import $ from "jquery";

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

    return (
        <div>{isFetched ?         <div>
            <Header />
            <Sharebutton />
            <div className="home">

                <HomeCarousel />
                <div className="home-packages">
                    <div data-aos="fade-right" className="trending-packages">
                        <div className="trending-title">
                            <h1 className="title-trending">Trending
                        <span className="title-trending" style={{ color: "#000" }}> Packages</span></h1>

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
                        <div data-aos="fade-left" className="trending-title">

                            <h1 className="title-other">Other
                        <span className="title-other"> Packages</span></h1>
                        </div>
                        <div data-aos="fade-right" className="packages-trending">
                            <Row className="trending-packages-row">
                                {
                                    otherPackages && otherPackages.map((n, m) => {

                                        return (
                                            <Col sm={6} md={6} lg={4} xl={3} key={m}>
                                                <OtherPackageCard pckg={n} />
                                            </Col>
                                        )

                                    }
                                    )}
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height:"100%"}}>
                <Review />
            </div>
            <Footer />
        </div> : <div className="loading-spinner"><Spinner animation="border" /></div>}</div>
    );
};

export default Home;