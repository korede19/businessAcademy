import React from "react";
import "./courseDetail.css";
import Header from "../../components/header/header";
import Forward from "../../svg/forward";
import DetailsList from "../../components/courseDetailslist/courseDetaillist";
import AboutCourse from "../../components/aboutCourse/aboutCourse";
import { CoursesInfo, ReviewInfo } from "../../utils/courseData";
import CourseReview from "../../components/courseReviews/reviews";
import Arrow from "../../svg/arrow";
import RecommendedCourses from "../../components/courses/recommendedCourses";
import Openarrow from "../../svg/openarrow";
import Dotnav from "../../svg/dotnav";
import Closearrow from "../../svg/closearrow";
import Footer from "../../components/footer/footer";

const CourseDetail = () => {
  return (
    <>
      <Header />
      <div className="detailLinks">
        <p>Home </p>
        <Forward />
        <h5>Market Research and Analysis</h5>
      </div>
      <DetailsList />
      <AboutCourse />
      <div className="reviewHeading">
        <h1>Course Reviews</h1>
      </div>
      <div className="reviewSection">
        {ReviewInfo?.map((item, index) => {
          return (
            <CourseReview
              image={item.image}
              title={item.title}
              rating={item.rating}
              text={item.text}
              key={index}
            />
          );
        })}
      </div>
      <div className="reviewSection2">
        {ReviewInfo?.map((item, index) => {
          return (
            <CourseReview
              image={item.image}
              title={item.title}
              rating={item.rating}
              text={item.text}
              key={index}
            />
          );
        })}
      </div>

      <div className="progressContain">
        <div className="headProgress">
          <h1>Related Course </h1>
        </div>
      </div>
      <div className="recommendedCourses">
        {CoursesInfo?.map((item, index) => {
          return (
            <RecommendedCourses
              image={item.image}
              title={item.title}
              review={item.review}
              text={item.text}
              course={item.course}
              duration={item.duration}
              price={item.price}
              key={index}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default CourseDetail;
