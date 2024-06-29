import React from "react";

const StarRating = ({ state }) => {
  return state ? (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.44775 1.30762L10.6839 5.83786L15.6846 6.56878L12.0662 10.0931L12.9201 15.072L8.44775 12.7201L3.9754 15.072L4.82934 10.0931L1.21094 6.56878L6.21158 5.83786L8.44775 1.30762Z"
        fill="#FFA826"
        stroke="#FFA826"
        stroke-width="1.44736"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.23608 1.30762L10.4723 5.83786L15.4729 6.56878L11.8545 10.0931L12.7084 15.072L8.23608 12.7201L3.76373 15.072L4.61767 10.0931L0.999268 6.56878L5.99991 5.83786L8.23608 1.30762Z"
        stroke="#FFA826"
        stroke-width="1.44736"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default StarRating;
