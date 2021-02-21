import React , {useEffect} from "react";
import Aboutus from "../Components/Aboutus";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import $ from "jquery";

const About = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
  }, []);

  return (
    <div>
      <Header />
      <Aboutus />
      <Footer />
    </div>
  );
};

export default About;
