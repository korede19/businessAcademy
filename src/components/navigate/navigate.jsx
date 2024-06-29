import React from "react";
import "./navigate.css";
import Arrow from "../../svg/arrow";
import Dotnav from "../../svg/dotnav";
import Openarrow from "../../svg/openarrow";
import Closearrow from "../../svg/closearrow";

const Navigate = () => {
  return (
    <>
      <div className="navigate">
        <Openarrow />
        <Dotnav />
        <Closearrow />
      </div>
    </>
  );
};

export default Navigate;
