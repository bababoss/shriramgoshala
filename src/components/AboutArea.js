import React from "react";
import aboutImage1 from "../images/about-img.jpg";
import aboutImage2 from "../images/about-img2.jpg";
import sectionIcon from "../images/section-icon.png";
const AboutArea = () => {
  return (
    <section className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-large-img">
              <img src={aboutImage1} alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-semi-img">
              <img src={aboutImage2} alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-heading">
              <div className="section-heading">
                <div className="section-icon">
                  <img src={sectionIcon} alt="section-icon" />
                </div>
                <h2 className="section__title">Discover About ShriramGoshala Khejroli</h2>
                <p className="section__meta">learn about ShriramGoshala Khejroli</p>
                <p className="section__desc">
                Every year more than a million cows, bulls and calves are slaughtered for their meat in India. These animals are even smuggled across national borders to slaughterhouses in Bangladesh and Pakistan. In many cases, their young are stolen from them by gau rakshaks – people hired by the dairy industry to take the lactating mothers away from the buffaloes so that they can continue to produce milk for human consumption.
The Government of India provides no aid or financial assistance to bovine animals which are facing slaughter. The State thus abdicates its duty to protect these animals. It is impossible to protect them without proper laws and the implementation of existing laws.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
