import React from "react";
import "./market.css";
import NextLink from "../../svg/nextlink";

const Marketing = ({ image, pretitle, text }) => {
  return (
    <>
      <div className="marketContainer">
        <div className="marketImage">
          <img src={image} alt="marketimage" />
        </div>
        <div className="marketTexts">
          <h3>{pretitle}</h3>
          <h1>Recomended Courses</h1>
          <p>{text}</p>
          <div className="marketButtonContain">
            <div className="marketButton">
              <p>Learn More</p>
            </div>
            <NextLink />
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
