import React, {useEffect} from 'react';
import Contactc from '../Components/Contact.js';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import $ from "jquery";

const Contact = () => {
    
    useEffect(() => {
        $(document).ready(function () {
          $(this).scrollTop(0);
        });
      }, []);

    return (
        <div>
        <Header />
           <Contactc />
           <Footer />
        </div>
    );
};

export default Contact;