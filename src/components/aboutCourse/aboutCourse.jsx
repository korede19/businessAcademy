import React from "react";
import "./aboutCourse.css";
import {
  CourseContents,
  LearnOutcomes,
  Listlists,
  Requirements,
} from "../../utils/data";
import Checkmark from "../../svg/checkmark";

const AboutCourse = () => {
  return (
    <>
      <div className="aboutCourseContain">
        <div className="aboutCourseTab">
          <div className="tabhead">
            <p>About Course</p>
            <p>Course Content</p>
            <p>Comments</p>
          </div>
          <div className="tabBody">
            <h1>Course Description</h1>
            {CourseContents?.map((item, index) => {
              return (
                <p key={index} className="tabTexts2">
                  {item}
                </p>
              );
            })}
          </div>
          <div className="tabBody">
            <h1>What you’ll learn</h1>
            {Listlists?.map((item, index) => {
              return (
                <p key={index} className="tabTests">
                  {item}
                </p>
              );
            })}
          </div>
          <div className="tabBody">
            <h1>Learning Outcomes</h1>
            <h4>By the end of the course, you will:</h4>
            {LearnOutcomes?.map((item, index) => {
              return (
                <div className="checkmark">
                  <Checkmark />
                  <p key={index} className="tabTests">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="tabBody">
            <h1>Requirements</h1>
            <h4>To fully benefit from this course, you only need:</h4>

            {Requirements?.map((item, index) => {
              return (
                <div className="checkmark">
                  <Checkmark />
                  <p key={index} className="tabTests">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col2TabCourse">
          <h2>Related Searches</h2>
          <div className="tabsbtn">
            <div className="btnTabOne">
              <button className="TabsButtons">Digital Marketing</button>
              <button className="TabsButtons">Email Marketing</button>
            </div>
            <div className="btnTabOne">
              <button className="TabsButtons">Social Media Advertising</button>
              <button className="TabsButtons"> Marketing</button>
            </div>
            <div className="btnTabOne">
              <button className="TabsButtons">Digital Marketing</button>
              <button className="TabsButtons">Email Marketing</button>
            </div>
            <div className="btnTabOne">
              <button className="TabsButtons">Social Media Advertising</button>
              <button className="TabsButtons"> Marketing</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCourse;
