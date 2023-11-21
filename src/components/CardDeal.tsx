// import React from 'react'
import { card } from "../assets";
import styles, { layout } from "../Style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <>
      <section className={`${layout.section}`}>
        {/* 👇 --------left--------- */}
        <div className={`${layout.sectionInfo}`}>
          {/* heading */}
          <h2 className={`${styles.heading2}`}>
            Find a better card deal <br className="sm:block hidden" /> in few
            easy steps.
          </h2>
          {/* paragraph */}
          <p className={`${styles.paragraph} max-[w-470px] mt-5`}>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          {/* Button component */}
          <Button stylees="mt-10" />
        </div>
        {/* 👆 --------left--------- */}
        {/* ⬇️ ----------right------- */}
        <div className={`${layout.sectionImg}`}>
          <img src={card} className={`w-[100%] h-[100%]`} alt="card" />
        </div>
        {/* ⬆️ ----------right------- */}

      </section>
    </>
  );
};

export default CardDeal;
