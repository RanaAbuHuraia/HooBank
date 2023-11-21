// import React from 'react'
import { feedback } from "../constants";
import styles from "../Style";
import FeedBackCard from "./FeedBackCard";

const Testimonials = () => {
  return (
    <>
      <section
        id="clients"
        className={` flex-col relative ${styles.paddingY} ${styles.flexCenter}`}
      >
        {/* gradients */}
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40"></div>

        {/* 👇upper section👇 */}
        <div
          className={`w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}
        >
          {/* heading */}
          <h1 className={`${styles.heading2}`}>
            What people are <br className={`sm:block hidden`} /> saying about us
          </h1>
          {/* paragraph */}
          <div className={`w-full md:mt-0 mt-6`}>
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
        </div>
        {/* 👆upper section👆 */}

        {/* ⬇️lower section⬇️ */}
        <div
          className={`flex flex-wrap sm:justify-start justify-center w-full relative z-[1] feedback-container`}
        >
          {feedback.map((cardItem) => (
            // ...cardItem : used spread operator and passed all properties of feedback array
            <FeedBackCard key={cardItem.id} {...cardItem} />
          ))}
        </div>
        {/* ⬆️lower section⬆️ */}
      </section>
    </>
  );
};

export default Testimonials;
