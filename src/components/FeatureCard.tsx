// import React from 'react'

import styles from "../Style";
import { features } from "../constants";

interface FeatureCardProps {
  id: string;
  icon: string;
  title: string;
  content: string;
  index: number;
}

const FeatureCard = ({ icon, title, content, index }: FeatureCardProps) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px]
    ${index !== features.length - 1 ? "mb-6" : "mb-0"}
    feature-card`}
    >
      {/* ---left--- */}
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img
          src={icon}
          className={`w-[50%] h-[50%] object-contain`}
          alt="icon"
        />
      </div>
      {/* ---right--- */}
      <div className="flex-1 flex flex-col ml-3">
        <h4
          className={`font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1`}
        >
          {title}
        </h4>
        <p className={`font-poppins font-normal text-white text-[16px] leading-[24px] mb-1`}>{content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
