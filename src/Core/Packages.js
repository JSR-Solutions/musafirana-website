import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PackageCard from "../Components/PackageCard";
import firebase from "firebase";
import { Col, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import "../Styles/Home.css";
import $ from "jquery";

const Packages = () => {
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
        db.collection('packages').get().then((res) => {
            res.forEach((doc) => {
                setIsFetched(true);
                setOtherPackages((prev) => {
                    return [...prev, { data: doc.data(), _id: doc.id }];
                });
            });
        });
    }

    return (
        <div>
            {isFetched ? <div><Header />
            <div className="heading-package">
                <h2>Packages</h2>
                <h2>Packages</h2>
            </div>
            <div className="home-packages">
            <div className="trending-packages">
                <div className="trending-title">
                    <h1 className="title-trending">Our
                        <span className="title-trending" style={{ color: "#000" }}> Packages</span></h1>
                </div>
                <div className="packages-trending">
                    <Row className="trending-packages-row">
                        {
                            otherPackages && otherPackages.map((n, m) => {

                                return (
                                    <Col sm={6} md={6} lg={4} xl={3} key={m} >
                                        <PackageCard pckg={n} />
                                    </Col>
                                )

                            }
                            )}
                    </Row>
                </div>
            </div>
            </div>
            <Footer /></div> : <div className="loading-spinner"><Spinner animation="border" /></div>}
        </div>
    );
};

export default Packages;




// <div className="trending-packages">
//                     <div className="trending-title">
//                         <h1 className="title-trending">Trending
//                         <span className="title-trending" style={{color: "#FDFA56"}}> Packages</span></h1>
//                     </div>
//                     <div className="packages-trending"> 
//                         <Row className="trending-packages-row">
//                         {
//                             trendingPackages && trendingPackages.map((n, m) => {
//                             if (m < 3) {
//                                 return (
//                                 <Col lg={4} md={6} sm={12}>
//                                     <PackageCard pckg={n} key={m} />
//                                 </Col>
//                                 )
//                             }
//                         }
//                             )}
//                         </Row>
//                     </div>
//                 </div>
