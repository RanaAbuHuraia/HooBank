// import React from 'react'
import styles from "../Style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <>
      <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        {/* 👇---------UPPER---------👇 */}
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          {/* ---BRAND INFO--- */}
          <div className="flex-1 flex flex-col justify-start mr-10">
            <img
              src={logo}
              alt="hoobank"
              className={`w-[266px] h-[72px] object-contain`}
            />
            <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>

          {/* ⬇️---links---⬇️ */}
          <div
            className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10`}
          >
            {footerLinks.map((footerLinksItems) => (
              <div
                key={footerLinksItems.title}
                className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
              >
                {/* link title */}
                <h4
                  className={`font-poppins font-medium text-[18px] leading-[72px] text-white`}
                >
                  {footerLinksItems.title}
                </h4>
                {/* links list */}
                <ul className={`list-none mt-4`}>
                  {footerLinksItems.links.map((linkItem, index) => (
                    <li
                      className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                        index != footerLinksItems.links.length - 1
                          ? "mb-4"
                          : "mb-0"
                      }`}
                      key={linkItem.name}
                    >
                      <a href={linkItem.link}>{linkItem.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* ⬆️---links---⬆️ */}
        </div>
        {/* 👆---------UPPER---------👆 */}

        {/* ⬇️---------BOTTOM---------⬇️ */}
        <div
          className={`w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3E45]`}
        >
          <p
            className={`font-poppins font-normal text-center text-[18px] leading-[72px] text-white`}
          >
            2023 HooBank. All Rights Reserved.
          </p>
          {/* ---social media icons--- */}
          <div className={`flex flex-row md:mt-0 mt-6`}>
            {socialMedia.map((socialItem, index) => (
              <a href={socialItem.link}>
                <img
                  className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                    index != socialMedia.length - 1 ? "mr-6" : "mr-0"
                  }`}
                  key={socialItem.id}
                  src={socialItem.icon}
                  alt={socialItem.id}
                />
              </a>
            ))}
          </div>
        </div>
        {/* ⬆️---------BOTTOM---------⬆️ */}
      </section>
    </>
  );
};

export default Footer;
