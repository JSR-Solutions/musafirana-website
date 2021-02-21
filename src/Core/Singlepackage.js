import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Row, Col, Modal, Button, Form } from 'react-bootstrap';
import firebase from 'firebase'
import '../Styles/singlepack.css';
import Collapsible from "react-collapsible";
import Spinner from 'react-bootstrap/Spinner';
import $ from "jquery";
import { isAuth } from '../helpers/auth'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
// import loadScript from 'load-script';


const Singlepackage = (props) => {
    const [pro, setpro] = useState('')
    const [isFetched, setIsFetched] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    const db = firebase.firestore()

    useEffect(() => {
        setpro('')
        db.collection('packages').doc(props.match.params.packageId).get()
            .then((res) => {
                setIsFetched(true);
                setpro(res.data())
            })
    }, [])

    useEffect(() => {
        $(document).ready(function () {
            $(this).scrollTop(0);
        });
    }, []);

    const generateTokenRazor = (amount) => {
        return fetch(`https://musafirrana.herokuapp.com/api/payment/details`, {
            method: 'Post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount })
        }).then(response => {
            return response.json();
        }).catch(err => {
            console.log(err);
        })
    }

    function MyVerticallyCenteredModal(props) {
        const [amount, setamount] = useState('')
        const [packageetype, setpackagetype] = useState('')

        const placeOrder = (_iddd) => {
            // console.log(amount)
            const date = new Date();
            const today = date.toDateString();

            db.collection('Orders').add({
                name: isAuth().FirstName,
                packageName: pro.name,
                userId: isAuth().uid,
                PhoneNumber: isAuth().PhoneNumber,
                emailId: isAuth().EmailId,
                packagePrice: amount,
                packageType: packageetype,
                Timestamp: today,
                paymentID: _iddd
            }).then(() => {
                toast.success('Purchase Completed')
                props.onHide()
            }).catch(() => {
                toast.error('Something went wrong')
            })

        }

        const paymentHandler = async () => {

            // const res = loadScript('https://checkout.razorpay.com/v1/checkout.js')
            // if (!res) {
            //     alert('Razorpay SDK failed to load. Are you online?')
            //     return
            // }
            if (isAuth() && amount && packageetype) {
                const getToken = (amount) => {
                    generateTokenRazor(amount)
                        .then(data => {
                            const options = {
                                key: "rzp_test_FLzJwnIjjLe9xD",
                                name: "MusafirRana",
                                description: "Thank You for shopping with us.",
                                currency: "INR",
                                order_id: data.id,
                                handler: async (response) => {
                                    console.log('payment done', response.razorpay_payment_id)
                                    // processPayment(userId, token, response, data.amount);
                                    placeOrder(response.razorpay_payment_id)
                                },
                                theme: {
                                    color: "#f1bc19",
                                }
                            };
                            const rzp1 = new window.Razorpay(options);
                            rzp1.open();
                        })
                }

                await getToken(amount)

            } else {
                toast.error('Please select package first !!!')
            }
        }

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <ToastContainer />
                    {
                        pro &&
                        <>
                            <h4>{pro.name}</h4>
                            <Form.Group>
                                <Form.Label>Select Package Cost</Form.Label>
                                <Form.Control as="select" onChange={(e) => {
                                    if (e.target.value) {
                                        setamount(pro.costing[e.target.value].cost)
                                        setpackagetype(pro.costing[e.target.value].title)
                                    }
                                }}
                                    name="fasdfasd"
                                >
                                    <option value={0}>Select Price</option>
                                    {
                                        pro && pro.costing.map((m, n) =>
                                            <option value={n} namee={`${m.title}`} className='fadsfa' key={n}>{m.title} : {m.cost} per person</option>
                                        )
                                    }
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Name - {isAuth().FirstName} {isAuth().LastName}</Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>EmailId - {isAuth().EmailId}</Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Mobile Number - {isAuth().PhoneNumber}</Form.Label>
                            </Form.Group>
                            {
                                amount &&
                                <Form.Group>
                                    <Form.Label>Total Amout - <span style={{ color: 'green', fontWeight: 'bolder' }}>Rs {amount}</span></Form.Label>
                                </Form.Group>
                            }
                            {
                                packageetype &&
                                <Form.Group>
                                    <Form.Label>Package Type - <span style={{ color: 'green', fontWeight: 'bolder' }}>{packageetype}</span></Form.Label>
                                </Form.Group>
                            }
                            <Button onClick={paymentHandler}>Pay Now</Button>
                        </>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <div>
            <ToastContainer />
            {isFetched ? <div><Header />
                <div className='single-pac'>
                    {
                        pro &&
                        <div className='single-pac1'>
                            <Row className="single-package-row">
                                <Col lg={6} md={12} sm={12}>
                                    <div className='single-pac2'>
                                        <div className='single-pac21'>
                                            <img src={pro.imageUrl} alt={pro.name} />
                                        </div>
                                        <div>
                                            <h2 className="single-pack-title">{pro.name}</h2>
                                        </div>
                                        <div className='single-book-options'>
                                            {
                                                pro && pro.name &&
                                                <a style={{ color: 'white' }} href={`https://api.whatsapp.com/send?phone=918800488956&text=I'm%20interested%20in%20your%20tourism%20package%20destination: ${pro.name} %20 duration: ${pro.duration} %0A package-cost: ${JSON.stringify(pro.costing)}`} target='_blank'><button>Book Offline</button></a>
                                            }
                                            {
                                                isAuth() &&
                                                <button onClick={() => setModalShow(true)}>Book Online</button>
                                            }
                                            {
                                                !isAuth() &&
                                                <Link to='/login'><button>Book Online</button></Link>
                                            }
                                        </div>
                                    </div>
                                </Col>
                                <Col className="single-package-details-side" lg={6} md={12} sm={12}>
                                    <div className='single-pac3'>
                                        <Collapsible open="true" className="single-pack-detail-title" trigger="About the trip">
                                            <p className="single-pack-detail-value">{pro.tripDesc}</p>
                                        </Collapsible>
                                        <Collapsible className="single-pack-detail-title" trigger="Costing">
                                            {pro.costing.map((k) => <li className="single-pack-detail-value">{k.title}: {k.cost} per person</li>)}
                                        </Collapsible>
                                        <Collapsible className="single-pack-detail-title" trigger="Daywise Itinerary">
                                            {pro.daywiseItinerary.map((k) => <div>
                                                <li className="single-pack-detail-value" style={{ color: "rgb(253, 250, 86)" }}>{k.title} : {k.subtitle}</li>
                                                <p className="single-pack-detail-value">{k.desc}</p>
                                                <p className="single-pack-detail-value">Meals Included : {k.meals}</p>
                                            </div>)}
                                        </Collapsible>
                                        <Collapsible className="single-pack-detail-title" trigger="Terms & Conditions">
                                            {pro.terms.map((k) => <li className="single-pack-detail-value">{k}</li>)}
                                        </Collapsible>
                                        <Collapsible className="single-pack-detail-title" trigger="Inclusions">
                                            {pro.inclusions.map((k) => <li className="single-pack-detail-value">{k}</li>)}
                                        </Collapsible>
                                        <Collapsible className="single-pack-detail-title" trigger="Exclusions">
                                            {pro.exclusions.map((k) => <li className="single-pack-detail-value">{k}</li>)}
                                        </Collapsible>
                                        <Collapsible className="single-pack-detail-title" trigger="Notes">
                                            {pro.notes.map((k) => <li className="single-pack-detail-value">{k}</li>)}
                                        </Collapsible>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    }
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <Footer /></div> : <div className="loading-spinner"><Spinner animation="border" /></div>}
        </div>
    );
};

export default Singlepackage;