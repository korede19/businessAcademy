import React from "react";
import "./courses.css";
import Header from "../../components/header/header";
import CourseTab from "../../components/coursetab/coursetab";
import FormSearch from "../../svg/search";
import Searchsettings from "../../svg/settings";
import RecommendedCourses from "../../components/courses/recommendedCourses";
import { CourseData, CoursesInfo, MarketingInfo } from "../../utils/courseData";
import Arrow from "../../svg/arrow";
import Openarrow from "../../svg/openarrow";
import Dotnav from "../../svg/dotnav";
import Closearrow from "../../svg/closearrow";
import Footer from "../../components/footer/footer";

const Courses = () => {
  return (
    <>
      <Header />
      <div className="heroContainer">
        <p>Courses</p>
        <div className="courseHeading">
          <h1>Courses</h1>
        </div>
      </div>
      <CourseTab />
      <div className="coursesHeading">
        <div className="navCourse">
          <h1>Marketing</h1>
        </div>
        <div className="navCourseSearch">
          <FormSearch />
          <input action="post" type="text" placeholder="Search" />
          <Searchsettings />
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
      <div className="progressContain">
        <div className="headProgress">
          <h1>New In Marketing </h1>
        </div>
        <div className="headProgress">
          <p>See all</p>
          <Arrow />
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
      <div className="navigate">
        <Openarrow />
        <Dotnav />
        <Closearrow />
      </div>
      <div className="progressContain">
        <div className="headProgress">
          <h1>New Courses</h1>
        </div>
        <div className="headProgress">
          <p>See all</p>
          <Arrow />
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
      <div className="navigate">
        <Openarrow />
        <Dotnav />
        <Closearrow />
      </div>
      <Footer />
    </>
  );
};

export default Courses;
