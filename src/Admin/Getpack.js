import React, { useEffect, useState, } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import PackageCard from "../Components/Admincard";
import firebase from "firebase";
import { Col, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import $ from "jquery";

const Getpack = () => {
    const [otherPackages, setOtherPackages] = useState([]);
    const db = firebase.firestore();
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        fetchPackages();
    }, [])
    
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

            <div className="trending-packages">
                <div className="trending-title">
                    <h1 className="title-trending">All
                    <span className="title-trending" style={{ color: "#FDFA56" }}> Packages</span></h1>
                </div>
                <div className="packages-trending">
                    <Row className="trending-packages-row">
                        {
                            otherPackages && otherPackages.map((n, m) => {

                                return (
                                    <Col sm={6} md={6} lg={4} xl={3} key={m} >
                                        <Link to = {`/admin/dashboard/edit/${n._id}`}>
                                        <PackageCard pckg={n} />
                                        </Link>
                                    </Col>
                                )

                            }
                            )}
                    </Row>
                </div>
            </div>
            <Footer /></div> :  <div className="loading-spinner"><Spinner animation="border" /></div>}
        </div>
    );
};

export default Getpack;