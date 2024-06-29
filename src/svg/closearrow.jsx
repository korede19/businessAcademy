import React from "react";

const Closearrow = ({ action }) => {
  return (
    <svg
      width="17"
      height="31"
      viewBox="0 0 17 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={action}
      style={{ cursor: "pointer" }}
    >
      <path
        d="M1.5 29.3379L15.5 15.3379L1.5 1.33789"
        stroke="#0663C7"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Closearrow;
