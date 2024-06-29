import React from "react";
import "./advert.css";
import Cancelform from "../../svg/cancel";

const Advert = () => {
  return (
    <>
      <div className="advertContainer">
        <div className="advertText">
          <p>
            Explore New Courses Now in <span>Finance and Accounting </span>
          </p>
        </div>
        <div className="advertButton">
          <div className="gotoCourse">
            <p>Go To Course</p>
          </div>
          <Cancelform />
        </div>
      </div>
    </>
  );
};

export default Advert;
