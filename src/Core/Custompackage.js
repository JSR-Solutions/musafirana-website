import React, {useEffect} from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Custompac from "../Components/Custompackage";
import $ from "jquery";

const Custompackage = () => {
    
  useEffect(() => {
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
  }, []);

    return (
        <div>
        <Header />
            <Custompac />
            <Footer />
        </div>
    );
};

export default Custompackage;