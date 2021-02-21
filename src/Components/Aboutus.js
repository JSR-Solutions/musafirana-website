import React from 'react'
import bg1 from '../Assets/bg1.jpg'
import bg2 from '../Assets/logo.jfif'
import bg3 from '../Assets/bg3.jpg'
import '../Styles/aboutus.css'
import { Container, Row, Col } from 'react-bootstrap'
import exp from '../Assets/experience.png'
import staff from '../Assets/employees.png'
import price from '../Assets/dollar.png'
import placeholder from '../Assets/placeholder.png'
import value from '../Assets/value.png'
import hotels from '../Assets/hotels.png'
import security from '../Assets/security.png'
import team from '../Assets/team.png'
import tag from '../Assets/tag.png'
import support from '../Assets/support.png'
import fox from '../Assets/digitalfox.jpeg'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillPhone} from 'react-icons/ai'
import AOS from "aos";
import "aos/dist/aos.css";


const AboutUs = () => {

  AOS.init() ;
  return (

    <div className="wrapper">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="aboutus">

        <div data-aos="fade-down" className="heading">
          <h2>About Us</h2>
          <h2>About Us</h2>
        </div>

        <div style={{ width: 'auto' }}>

          <div className="aboutus-banner">

            <Container>

              <Row className='hmyadnhitumko'>
                <Col sm={12} lg={6} xs={12}>
                  <div data-aos="fade-right" className="banner1">
                    <img src={bg1} />
                  </div>
                </Col>

                <Col sm={12} lg={6} xs={12}>
                  <p ><h3><div data-aos="fade-down" className='change-color'>INCREDIBLE</div> Experiences!
                </h3> Musafirrana Travel is one of India's coolest travel companies, Where the goal is to target every age group and profession and make travel easy and economical on the pocket. We have backpacking trips for youngsters and college students and we also have luxurious trips for corporates clients as well. Our goal is to make travel accessible for everyone. 
                From kasol kheerganga, Manali, Chopta, Kedarkantha, Kashmir, Kerala, Sikkim, Rajasthan to Bali, Dubai, Greece, Paris we have every destination covered for you. We also do Kedarnath, Badrinath, Bada Chaar Dham, and EVEN KAILASH MANSAROVAR. We are experienced and Specialized in Treks like Kedarkantha, Dayra Bhugyal, Kheerganga, Kareri Lake, Indrahaar. Hampta Pass, Rupin Pass, Naag Tibba, RoopKund, Chawkhamba, and numerous other treks.
</p>
                </Col>
              </Row>

              <hr className="hrr"></hr>

              <Row className='hmyadnhitumko'>
                <Col md={{ order: 2, span: 12 }} lg={{ span: 6, order: 1 }} xs={12}>
                  <p><h3><div data-aos="fade-down" className='change-color'>OUR</div> Beginning.</h3>We are a company of young and creative minds who want to turn into a big travel community.  Musafirrana Travel was founded in 2019 by Akash Rana, A Travel Enthusiast, A StoryTeller, A Budding Stand up Comedian, and a guy who has gone through a lot to make this dream of making a travel Community come true. Every trip There will be story Sessions so that we broaden our perception towards life.

Hope we all will see each other one day on a path where everything brings us together.</p>
                </Col>
                <Col md={{ order: 1, span: 12 }} lg={{ span: 6, order: 2 }} xs={12}>
                  <div data-aos="fade-left" className="banner1">
                    <img src={bg2} />
                  </div>
                </Col>
              </Row>

              <div className='maujkaradibete'>
                <div data-aos="flip-up" className='ekaurdiv'>
                  <center><h1>WHAT WE PROVIDE</h1></center>

                  <div className='services'>
                    <Row className="service-row">
                      <Col xs={12} md={6} lg={3}>
                        <center>
                          <img src={placeholder} />
                          <h4>LOCATION</h4>
                          <p>Expert local knowledge and regional, on-the-ground guides so you enjoy the ultimate experience.</p>
                        </center>
                      </Col>
                      <Col xs={12} md={6} lg={3}>
                        <center>
                          <img src={exp} />
                          <h4>EXPERIENCE</h4>
                          <p>The experience to help enhance your itinerary - or tailor-make you an entire journey.</p>
                        </center>
                      </Col>
                      <Col xs={12} md={6} lg={3}>
                        <center>
                          <img src={staff} />
                          <h4>STAFF</h4>
                          <p>All the members of our team are passionate about their work and always ready to help.</p>
                        </center>
                      </Col>
                      <Col xs={12} md={6} lg={3}>
                        <center>
                          <img src={price} />
                          <h4>PRICE</h4>
                          <p>Due to direct contracts with all our suppliers, our prices are always relevant and affordable.
            </p>
                        </center>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
              <br /><br /><br />

              <div className="banner2">
                <Row>
                  <Col sm={12} lg={6} xs={12}>
                    <div className='banner22'>
                      <img src={bg3} />
                    </div>
                  </Col>
                  <Col sm={12} lg={6} xs={12}>
                    <center>
                      <p><h3> “Jobs fill your pockets, adventures fill your soul.”</h3></p>
                
                    </center>
                  </Col>
                </Row>
              </div>
              <br /><br /><br />

              <div data-aos="flip-up" className="banner3">
                <center><h1>WHY CHOOSE US?</h1></center>
                <div className='services'>
                  <Row>

                    <Col lg={2} md={2}>
                      <center>
                        <img src={tag} />
                        <h4>Unlimited</h4>
                        <h6>Deals</h6>
                      </center>
                    </Col>
                    <Col lg={2} md={2}>
                      <center>
                        <img src={support} />
                        <h4>24/7</h4>
                        <h6>Support</h6>
                      </center>
                    </Col>
                    <Col lg={2} md={2}>
                      <center>
                        <img src={team} />
                        <h4>200+</h4>
                        <h6>Ground Expert</h6>
                      </center>
                    </Col>
                    <Col lg={2} md={2}>
                      <center>
                        <img src={hotels} />
                        <h4>450+</h4>
                        <h6>Hotels</h6>
                      </center>
                    </Col>
                    <Col lg={2} md={2}>
                      <center>
                        <img src={value} />
                        <h4>Happy</h4>
                        <h6>Clients</h6>
                      </center>
                    </Col>
                    <Col lg={2} md={2}>
                      <center>
                        <img src={security} />
                        <h4>100%</h4>
                        <h6>Money-Safe</h6>
                      </center>
                    </Col>

                  </Row>
                </div>
              </div>

              <div className="team">
             <div data-aos="flip-up"> <center><h1>OUR TEAM</h1></center></div>
              <br></br><br></br>
              <Row>
              <Col>
<div className="centerboi">             
<div class="flip">
    <div class="front" style={{ backgroundImage: `url(${fox})`}}>
       <h1 class="text-shadow">AKASH RANA</h1>
    </div>
    <div class="back">
       <h2>Akash Rana</h2>
       <p>Owner.</p>
    </div>
</div>
</div>
</Col>

<Col>
<div className="centerboi">             
<div class="flip">
    <div class="front" style={{ backgroundImage: `url(${fox})`}}>
       <h1 class="text-shadow">ATOM PODDAR</h1>
    </div>
    <div class="back">
       <h2>Atom Poddar</h2>
       <p>Creative designer.</p>
    </div>
</div>
</div>
</Col>
<Col>
<div className="centerboi">             
<div class="flip">
    <div class="front" style={{ backgroundImage: `url(${fox})`}}>
       <h1 class="text-shadow">DIGITAL FOX</h1>
    </div>
    <div class="back">
       <h2>Digital Fox</h2>
       <p>DigitalFox is a digital advertising innovation that simplistically aims on expanding the online presence and strategic branding of a business. Our services include SEO, PPC, Website design and Management, Social media marketing, Email marketing.
       <br /><br /><AiOutlineMail /> digitalfox_india@yahoo.com<br /><AiFillPhone /> 9821098496</p>
    </div>
</div>
</div>
</Col>
</Row>

              
              </div>

            </Container>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs;