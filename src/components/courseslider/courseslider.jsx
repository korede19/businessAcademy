import React, { useState } from "react";
import "./courseslider.css";
import Courses from "../../svg/courses";
import Time from "../../svg/time";

const CourseSlide = ({
  image,
  title,
  text,
  line,
  number,
  duration,
  lessons,
}) => {
  return (
    <>
      <div className="courseContain">
        <img src={image} alt="cardsImage" className="courseImage" />
        <div className="cardsTexts">
          <h1>{title}</h1>
          <p>{text}</p>
          <div className="progressBar">
            <img src={line} alt="progress" />
            <p>{number}</p>
          </div>
          <div className="duration">
            <Time />
            <p>{duration}</p>
            <Courses />
            <p>{lessons}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseSlide;
