import React from "react";
import "./courseTab.css";
import { tabLinks } from "../../utils/data";

const CourseTab = () => {
  return (
    <>
      <div className="tabContain">
        {tabLinks?.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </>
  );
};

export default CourseTab;
