import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <Header />
      <section id="contact-page">
        <div className="contact-page-map">
          <img
            className="contact-page-map-img hide-img"
            src="assets/images/contact-page-map.jpg"
            alt="click to activate map"
          />
          <div
            id="my-fast-map"
            data-iframe-width="100%"
            data-iframe-height={350}
            data-iframe-src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27204.486514455544!2d74.38864918505867!3d31.536220284112016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919050e085e7535%3A0xfbf788dae725f245!2sLahore+Cantt.%2C+Lahore%2C+Pakistan!5e0!3m2!1sen!2sus!4v1510359634902"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27204.486514455544!2d74.38864918505867!3d31.536220284112016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919050e085e7535%3A0xfbf788dae725f245!2sLahore+Cantt.%2C+Lahore%2C+Pakistan!5e0!3m2!1sen!2sus!4v1510359634902"
              width="100%"
              height={350}
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="holder">
          <div className="contact-page-form-holder">
            <div className="custom-heading">
              <h2>Contact Us</h2>
            </div>
            <form
              action="#"
              className="contact-page-form"
              noValidate="novalidate"
            >
              <div className="row">
                <div className="columns">
                  <div className="row">
                    <div className="general-inquiry">
                      <a className="general-inquiry-btn" href="#">
                        General Inquiry
                      </a>
                      <div className="general-inquiry-block">
                        <ul>
                          <li>
                            <a href="#">Talk to CEO</a>
                          </li>
                          <li>
                            <a href="#">Technical Department</a>
                          </li>
                          <li>
                            <a href="#">Administrator</a>
                          </li>
                          <li>
                            <a href="#">Bug/Error</a>
                          </li>
                          <li>
                            <a href="#">Complaint </a>
                          </li>
                          <li>
                            <a href="#">Suggestions</a>
                          </li>
                          <li>
                            <a href="#">I want to join iLinkedOn </a>
                          </li>
                          <li>
                            <a href="#">I want be Partner At iLinkedOn </a>
                          </li>
                          <li>
                            <a href="#">Can I be Investor?</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <span className="user-name">
                      <input
                        type="text"
                        className="input-field"
                        placeholder="Your Full name"
                        id="user-name"
                        minLength={10}
                        required
                      />
                      <strong className="user_name-icon" />
                    </span>
                  </div>
                  <div className="row">
                    <span className="email">
                      <input
                        type="text"
                        className="input-field"
                        placeholder="Email"
                        name="email"
                        id="email"
                        required
                      />
                      <strong className="email-icon" />
                    </span>
                  </div>
                  <div className="row">
                    <span className="phone">
                      <input
                        type="text"
                        className="input-field"
                        placeholder="Phone Number"
                        id="phone"
                        minLength={10}
                        name="phone"
                        required
                      />
                      <strong className="phone-icon" />
                    </span>
                  </div>
                </div>
                <div className="columns">
                  <div className="row">
                    <span className="subject">
                      <input
                        type="text"
                        placeholder="Subject"
                        id="subject"
                        className="input-field"
                        minLength={10}
                        name="subject"
                        required
                      />
                      <strong className="subject-icon" />
                    </span>
                  </div>
                  <div className="row">
                    <span className="message">
                      <textarea
                        className="input-field"
                        placeholder="message"
                        id="message"
                        minLength={20}
                        name="message"
                        defaultValue={""}
                      />
                      <strong className="message-icon" />
                    </span>
                  </div>
                  <div className="row">
                    <img src="assets/images/robot-img.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="contact-info-block">
            <ul>
              <li className="location-block">
                <span>SalamatPura, Lahore</span>
                <span>Lahore, Punjab, Pakistan</span>
              </li>
              <li className="call-block">
                <a href="tel:+923234856231">+92 - 323 - 485 - 6231</a>
                {/* <a href="tel:+923211999700">+92 - 321 - 199 - 9700</a> */}
              </li>
              <li className="email-block">
                <a href="mailto:meharjunaid950@gmail.com">meharjunaid950@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
