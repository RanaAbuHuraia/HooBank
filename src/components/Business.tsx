// import React from 'react'
import { features } from "../constants";

// style is the default export
// layout it the named export
import styles, { layout } from "../Style";
import Button from "./Button";
import FeatureCard from "./FeatureCard";

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      {/* 👇-----left section----- */}
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className={`sm:block hidden`} /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        {/* ---Button Component--- */}
        {/* passing prop 'stylees="mt-10"' */}
        <Button stylees="mt-10" />
      </div>
      {/* 👆-----left section----- */}

      {/* 👇-----right section: features----- */}
      <div className={`${layout.sectionImg} flex-col`}>
        {/* map data from 'features' array present in constant/index.tsx */}
        {features.map((featureItem, featureItemIndex) => (
          <FeatureCard
            key={featureItem.id}
            index={featureItemIndex}
            // using spread operator and passing all properites of object as prop
            {...featureItem}
          />
        ))}
      </div>
      {/* 👆-----right section: features----- */}
    </section>
  );
};

export default Business;
