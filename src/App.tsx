// import React from "react";
import styles from "./Style";

//imported all components
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components/AllComponents";

const App = () => {
  return (
    <>
      {/* navbar */}
      <div className="bg-primary text-white w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar></Navbar>
          </div>
        </div>
      </div>

      {/* hero section */}
      <div
        className={`bg-primary text-white ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
        </div>
      </div>
      
      <div
        className={`bg-primary text-white ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Stats></Stats>
          <Business></Business>
          <Billing></Billing>
          <CardDeal></CardDeal>
          <Testimonials></Testimonials>
          <Clients></Clients>
          <CTA></CTA>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default App;
