// import React from 'react'
import styles from "../Style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className={`flex md:flex-row flex-col  ${styles.paddingY}`}
      >
        {/* ⬇️______LEFT SIDE OF SECTION_____ */}
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          {/*👇--- for discount icon and text ---*/}
          <div
            className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
          >
            {/* % icon */}
            <img
              src={discount}
              alt="discount"
              className={`w-[32px] h-[32px]`}
            />

            {/* Text: 20% Discount For 1 Month Account */}
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">20% </span>
              Discount For <span className="text-white">1 Month </span>
              Account
            </p>
          </div>
          {/*👆--- for discount icon and text ---*/}

          {/*👇--- heading text ---*/}
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
              The Next
              <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Generation</span>
            </h1>

            {/* --getstarted text circle */}
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
            Payment Method.
          </h1>
          {/*👆 --- heading text --- */}

          {/* 👇 ---body text --- */}
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
          {/* 👆 ---body text --- */}
        </div>
        {/* ⬆️______LEFT SIDE OF SECTION_____ */}

        {/* ⬆️______RIGHT SIDE OF SECTION_____ */}
        {/* 👇 ---robot hand---*/}
        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <img
            src={robot}
            alt="billing"
            className={`w-[100%] relative z-[5]`}
          />

          {/* gradient - robot hand */}
          <div
            className={`absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient`}
          ></div>
          <div
            className={`absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient`}
          ></div>
          <div
            className={`absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient`}
          ></div>
        </div>
        {/* 👆 ---robot hand---*/}
        {/* ⬆️______RIGHT SIDE OF SECTION_____ */}

        {/* GetStarted component, that will only show in ss device */}
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </section>
    </>
  );
};

export default Hero;
