import React from "react";
import "./courseDetail.css";
import Header from "../../components/header/header";
import Forward from "../../svg/forward";
import DetailsList from "../../components/courseDetailslist/courseDetaillist";

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
    </>
  );
};

export default CourseDetail;
