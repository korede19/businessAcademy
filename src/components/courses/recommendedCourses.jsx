import React from "react";
import "./course.css";
import Viewcourse from "../../svg/viewcourse";
import Courses from "../../svg/courses";
import ClockIcon from "../../svg/time";
import Arrow from "../../svg/arrow";

const RecommendedCourses = ({
  image,
  title,
  review,
  text,
  course,
  duration,
  price,
}) => {
  return (
    <>
      <div className="cardContain">
        <img src={image} alt="cardsImage" className="imageCourse" />
        <div className="TextCards">
          <div className="headContain">
            <h1>{title}</h1>
            <div className="innerdiv">
              <Viewcourse />
              <p>244</p>
            </div>
          </div>
          <div className="bodyContain">
            <img src={review} alt="star" />
            <p>{text}</p>
          </div>
          <div className="modules">
            <Courses />
            <p>{course}</p>
            <ClockIcon />
            <p>{duration}</p>
          </div>
          <div className="buttonContain">
            <button>Learn More</button>
            <h2>{price}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendedCourses;
