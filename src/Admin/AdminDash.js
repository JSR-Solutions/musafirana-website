import React, {useEffect} from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import "../Styles/AdminDashboard.css";
import {Row, Col, Card} from 'react-bootstrap';
import $ from "jquery";

const AdminDash = () => {
    
    useEffect(() => {
        $(document).ready(function () {
          $(this).scrollTop(0);
        });
      }, []);

    return (
        <div>
            <Header />
            <div className="admin-dashboard">
                <div className="admin-dashboard-title"><h1>Hello Admin,</h1></div>
                <Row className="admin-dashboard-row">
                    <Col><Link to='/admin/dashboard/alldestination'>
                            <Card>
                                <Card.Body>View & Edit Packages</Card.Body>
                            </Card>
                         </Link>
                    </Col>
                    <Col>
                        <Link to='/admin/dashboard/allbookings'>
                            <Card>
                                <Card.Body>All Bookings</Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col>
                        <Link to='/admin/dashboard/addpackage'>
                            <Card>
                                <Card.Body>Add Package</Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
    );
};

export default AdminDash;