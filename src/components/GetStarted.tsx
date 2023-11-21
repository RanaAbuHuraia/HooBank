// import React from 'react'
import styles from "../Style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <>
      {/* rounded circle */}
      <div
        className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}
      >
        {/* 👇inner rounded circle (its the black color)) */}
        <div
          className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
        >
          {/* Get text and arrow icon */}
          <div className={`${styles.flexStart} flex-row`}>
            {/* get text */}
            <p
              className={`font-poppins font-medium text-[18px] leading-[23px] text-gradient mr-2`}
            >
              <span>Get</span>
            </p>
            {/* arrow icon */}
            <img
              src={arrowUp}
              className={`w-[23px] h-[23-px] object-contain`}
              alt="arrow"
            />
          </div>
{/* Started text */}
          <p
            className={`font-poppins font-medium text-[18px] leading-[23px] text-gradient`}
          >
            <span>Started</span>
          </p>
        </div>
        {/* 👆inner rounded circle (its the black color)) */}
      </div>
    </>
  );
};

export default GetStarted;
