import react from "react";
import Ladakhh from "../Assets/ladakh2.jpg";
import "../Styles/review.css"
import {Carousel} from "react-bootstrap"
import AOS from "aos";
import "aos/dist/aos.css";


function Review(){
    AOS.init();
    return(
        <div data-aos="fade-in" id="review_base">
            <div className="h_heading">
                <h1 className="h_h1">Our Top Reviews</h1>
            </div>
                <div className="h_reviews">
                <Carousel classname="h_review_carousel">
                    <Carousel.Item className="h_Sreview" interval={5000}>
                        <div >
                            <img className="review_img" src="https://lh3.googleusercontent.com/a-/AOh14Gjb_6Vc0eJ4UujknLKyBJ9Ms896gNTvN8vCxagBuQ=w75-h75-p-rp-mo-br100"></img>
                        </div>
                        <div className="">
                        <h3 className="h_h3">Kamalpreet Kaur</h3><br></br><br></br>
                        <p>I had amazing experience wid musafirana travels.They r really gud in responding nd serving client wid gud services.Appreciated there work👍would luv to get served again soon.</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="h_Sreview" interval={5000}>
                    <div >
                    <img className="review_img" src="https://lh3.googleusercontent.com/-994SzgSFqbA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucknztZ1eJfhKbBkbcCVL7SOt33eWg/w75-h75-p-rp-mo-br100/photo.jpg"></img>
                </div>
                <div className="">
                <h3 className="h_h3">V.Karthik Pillai</h3><br></br>
                <p>I don’t usually write a review but this certain experience of my weekend get out has made me to. All thanks to Mussafirrana Travels! They helped me have a really good experience! Will suggest everyone to go forward and choose them over most of the new unresponsive, pricy travel companies!</p>
                </div>    
                    </Carousel.Item>
                    <Carousel.Item className="h_Sreview" interval={5000}>
                    <div >
                    <img className="review_img" src="https://lh4.googleusercontent.com/-gnZFqbZoRGY/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckbIustvUihtQt2Q66xF2QoA4zlMQ/w75-h75-p-rp-mo-br100/photo.jpg"></img>
                </div>
                <div className="">
                <h3 className="h_h3">Arushi Bhatnagar</h3><br></br><br></br>
                <p>Had a great travelling experience with Musafirrana, starting from travelling to stay and food everything they organise is with keeping the travellers in mind!</p>
                </div>    
                    </Carousel.Item>
                </Carousel>  
    
                </div>
            
            </div>
        
        
    );
}
export default Review;

