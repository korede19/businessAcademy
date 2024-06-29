import React from "react";
import "./footer.css";
import Logo from "../../assets/Logo.png";
import Facebook from "../../svg/facebooksocial";
import Twittersocial from "../../svg/twittersocial";
import Linkedln from "../../svg/linkdln";

const Footer = () => {
  return (
    <>
      <div className="line"></div>
      <div className="footerContainer">
        <div className="footerContain">
          <div className="footercol1">
            <img src={Logo} alt="Logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Sollicitudin sapien sed
              neque leo elit neque ac. Lectus sed proin imperdiet potenti mauris
              nunc pulvinar habitasse.
            </p>
            <div className="socials">
              <Facebook />
              <Twittersocial />
              <Linkedln />
            </div>
          </div>
          <div className="footercol2">
            <div className="footerCompany">
              <h2>Company</h2>
              <p>About Us</p>
              <p>Blog </p>
              <p>Contact Us</p>
            </div>
            <div className="footerCompany">
              <h2>Resourses</h2>
              <p>FAQs</p>
              <p>Developer Portal </p>
            </div>
            <div className="footerCompany">
              <h2>Policies</h2>
              <p>Terms & Conditions</p>
              <p>Return Policy </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h4>2022 Avuna Business Academy. All Rights Reserved</h4>
        <p>Terms & Conditions</p>
      </div>
    </>
  );
};

export default Footer;
