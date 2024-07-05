import React from "react";
import "./review.css";

const CourseReview = ({ image, title, rating, text }) => {
  return (
    <>
      <div className="reviewContain">
        <div className="reviewProfile">
          <img src={image} className="profileImg" alt="picture" />
          <div className="reviewrate">
            <h2>{title}</h2>
            <img src={rating} className="starImg" alt="star" />
          </div>
        </div>
        <p className="textbbdy">
          {text}
          <span className="readMore"> Read More</span>
        </p>
      </div>
    </>
  );
};

export default CourseReview;
