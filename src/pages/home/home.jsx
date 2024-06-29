import React, { useState } from "react";
import "./home.css";
import Header from "../../components/header/header";
import Advert from "../../components/advert/advert";
import HeroSection from "../../components/hero/hero";
import Arrow from "../../svg/arrow";
import Navigate from "../../components/navigate/navigate";
import { CourseData, CoursesInfo, MarketingInfo } from "../../utils/courseData";
import CourseSlide from "../../components/courseslider/courseslider";
import Openarrow from "../../svg/openarrow";
import Dotnav from "../../svg/dotnav";
import Closearrow from "../../svg/closearrow";
import RecommendedCourses from "../../components/courses/recommendedCourses";
import NextLink from "../../svg/nextlink";
import Marketing from "../../components/maerketing/market";
import Explorecourses from "../../components/explore/explore";
import Footer from "../../components/footer/footer";

const Home = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const array = [1, 2, 3, 4, 5];
  return (
    <>
      <Header />
      <Advert />
      <HeroSection />
      <div className="progressContain">
        <div className="headProgress">
          <h1>InProgress</h1>
          <h3>6</h3>
        </div>
        <div className="headProgress">
          <p>See all</p>
          <Arrow />
        </div>
      </div>
      <div className="courseslideTab">
        {CourseData?.slice(start, end)?.map((item, index) => {
          return (
            <CourseSlide
              image={item.image}
              title={item.title}
              text={item.text}
              line={item.line}
              number={item.number}
              duration={item.duration}
              lessons={item.lessons}
              key={index}
            />
          );
        })}
      </div>
      <div className="navigate">
        <div className="navigate">
          <Openarrow />
          <Dotnav />
          <Closearrow
            action={() => {
              if (end === CourseData.length) {
                setEnd(3);
                setStart(0);
              } else {
                setStart((start) => start + 1);
                setEnd((end) => end + 1);
              }
            }}
          />
        </div>
      </div>
      <div className="progressContain">
        <div className="headProgress">
          <h1>Recomended Course</h1>
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
        <div className="navigate">
          <Openarrow />
          <Dotnav />
          <Closearrow />
        </div>
      </div>
      <div className="marketContain">
        {MarketingInfo?.map((item, index) => {
          return (
            <Marketing
              image={item.image}
              pretitle={item.pretitle}
              Title={item.title}
              text={item.text}
              key={index}
            />
          );
        })}
      </div>
      <div className="progressContain">
        <div className="headProgress">
          <h1>Popular Courses</h1>
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
        <div className="navigate">
          <Openarrow />
          <Dotnav />
          <Closearrow />
        </div>
      </div>
      <div className="explorecontainer">
        <Explorecourses />
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
      <div className="progressContain">
        <div className="headProgress">
          <h1>Avuna Starter Lesson For Businesses</h1>
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

export default Home;
