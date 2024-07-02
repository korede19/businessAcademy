import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="heroContainer">
        <div className="firstText">
          <p>Home</p>
        </div>
        <div className="herotexts">
          <h1>Welcome John</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Fringilla aliquam euismod
            curabitur ullamcorper id rhoncus auctor cursus. Dolor egesta.
          </p>
          <div className="enrollButton">
            <Link to="/courses">
              <button>Enroll For Courses</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
