// import React from 'react'
import { quotes } from "../assets";

interface FeedBackCardProp {
  content: string;
  name: string;
  title: string;
  img: string;
}

const FeedBackCard = ({ content, name, title, img }: FeedBackCardProp) => {
  return (
    <>
      <div
        className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card `}
      >
        {/* quotes icon */}
        <img
          src={quotes}
          alt="doubel_quotes"
          className={`w-[42px] h-[27px] object-contain`}
        />
        {/* paragraph */}
        <p
          className={`font-poppins font-normal text-[18px] leading-[32px] text-white my-10`}
        >
          {content}
        </p>

        {/*👇 ---person section---  👇*/}
        <div className={`flex flex-row`}>
          {/* person image */}
          <img
            src={img}
            alt={name}
            className={`w-[48px] h-[48px] rounded-full`}
          />
          {/* person details */}
          <div className={`flex flex-col ml-4`}>
            {/* person name */}
            <h4
              className={`font-poppins font-semibold text-[20px] leading-[32px] text-white`}
            >
              {name}
            </h4>
            {/* person designation */}
            <p
              className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite`}
            >
              {title}
            </p>
          </div>
        </div>
        {/*👆 ---person section---  👆*/}
      </div>
    </>
  );
};

export default FeedBackCard;
