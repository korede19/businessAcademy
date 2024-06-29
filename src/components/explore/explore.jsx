import React from "react";
import "./explore.css";

const Explorecourses = () => {
  return (
    <>
      <div className="exploreContain">
        <div className="exploreText">
          <h1>Explore courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Turpis lorem pellentesque
            congue vulputate in ultricies semper orci. Sit in molestie elementum
            fermentum elit.
          </p>
        </div>
        <div className="buttonContainer">
          <div className="col1btn">
            <button className="explorebtn">Marketing</button>
            <button className="explorebtn">Finance & Accounting</button>
            <button className="explorebtn">Operation Management</button>
          </div>
          <div className="col1btn">
            <button className="explorebtn">Sales</button>
            <button className="explorebtn">Digial Marketing</button>
            <button className="explorebtn">Project Mangement</button>
            <button className="explorebtn">Enterpreneurship</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explorecourses;
