import React, {useEffect} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import $ from "jquery";

const Errorpage = () => {
    useEffect(() => {
      $(document).ready(function () {
        $(this).scrollTop(0);
      });
    }, []);

    return (
        <div>
        <Header />
            Errorpage
            <Footer />
        </div>
    );
};

export default Errorpage;