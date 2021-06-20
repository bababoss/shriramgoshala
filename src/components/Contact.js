import React from "react";
import sectionIcon from "../images/section-icon.png";
const Contact = () => {
  return (
    <section className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <div className="section-icon">
                <img src={sectionIcon} alt="section-icon" />
              </div>
              <h2 className="section__title">Get in Touch With Us</h2>
              <p className="section__meta">Write a message</p>
              <p className="section__desc">
              ShriramGoshala Goshalas are protective shelters for cows in Khejroli Rajasthan. Goshalas focus on treating cows well, because of their religious significance in Hinduism and consequent cultural sensitivity towards their welfare.
              </p>
              <ul className="section__list">
                <li>
                  <a href="#none">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#none">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-shared">
              <form action="#" method="post">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="col-lg-6 col-sm-6 form-group">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="col-lg-12 form-group">
                    <input
                      className="form-control"
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="col-lg-12 col-sm-12 form-group">
                    <textarea
                      className="textarea"
                      name="message"
                      placeholder="Write a Message"
                    ></textarea>
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <button className="theme-btn submit__btn" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row contact-detail-action">
          <div className="col-lg-4">
            <div className="contact-item contact-item1">
              <h3 className="contact__title">About</h3>
              <p className="contact__desc">
              On 12 July 1991, Shriram Goshalas came to the rescue of all the cows that were among The abandoned cows that were rescued by Shriram Goshalas from the road, jungle and dump-yard in Rajasthan.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-item contact-item2">
              <h3 className="contact__title">Address</h3>
              <p className="contact__desc">
                ShriRam Goshala, Khejroli, Jaipur, Rajasthan, 303803
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-item contact-item3">
              <h3 className="contact__title">Contact</h3>
              <p className="contact__desc">
                shriramgoshalakhejroli@gmail.com <br />
                8553759008
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
