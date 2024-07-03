import React from "react";
import "./courseDetaillist.css";
import SaveFiles from "../../svg/save";
import Foward from "../../svg/forward";
import PlayButton from "../../svg/playBtn";
import Star from "../../assets/Rating.png";
import VideoBox from "../../assets/videoBox.png";

const DetailsList = () => {
  return (
    <>
      <div className="DetailsListContain">
        <div className="DetailsContainer">
          <div className="detalsContain">
            <div className="detailsHeader">
              <div className="detailsHead">
                <h1>Basics of Public Speaking and Presentation Skills</h1>
                <button className="detailsBtn">Basic</button>
              </div>
              <div className="detailsRating">
                <img src={Star} alt="" />
                <h4>4.5 (2321 Reviews)</h4>
              </div>
              <button className="detailsBtn2">Marketing</button>
            </div>
            <div className="detailsBtntwoContain">
              <div className="detailsBtntwo">
                <SaveFiles />
                <p>Save</p>
              </div>
              <div className="detailsBtntwo">
                <Foward />
                <p>Share</p>
              </div>
            </div>
          </div>
          <div className="videoBox">
            <img src={VideoBox} alt="" />
          </div>
        </div>
        <div className="detailsPricing">
          <h1>$35.00</h1>
          <div className="pricingBody">
            <p>$35.00</p>
            <p className="Btnprice">$35.00</p>
          </div>
          <div className="priceBtnContain">
            <button className="priceBtnOne">Add To Cart</button>
            <button className="priceBtnTwo">Buy Now</button>
          </div>
          <div className="courseListsBody">
            <h1>This Course Includes</h1>
            <div className="listIconText">
              <PlayButton />
              <p>2 Hours on-demand video</p>
            </div>
            <div className="listIconText">
              <PlayButton />
              <p>3 Articles</p>
            </div>
            <div className="listIconText">
              <PlayButton />
              <p>5 Downloadable resources</p>
            </div>
            <div className="listIconText">
              <PlayButton />
              <p>Full lifetime access</p>
            </div>
            <div className="listIconText">
              <PlayButton />
              <p>Assignments</p>
            </div>
            <div className="listIconText">
              <PlayButton />
              <p>Certificate of completion.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsList;
