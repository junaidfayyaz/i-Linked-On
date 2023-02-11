import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Contact.css";
import 'lazysizes';
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
const Contact = () => {
  const validationSchema = yup.object({
    first: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Field is Required"),
    last: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Field is Required"),
    email: yup
      .string()
      .email("invalid email address")
      .required("Field is Required"),
    number: yup
      .number()
      .min(2, "Confirm Your Number")
      .max(12345678912, "Number is Invalid")
      .required("Field is Required"),
    password: yup.string().required("Field is required"),
    confirm: yup
      .string()
      .required("Field is required")
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf([yup.ref("password")], "Both password need to be the same"),
      }),
    gender: yup.string().required("Field is Required"),
    country: yup.string().required("Field is Required"),
    textareaone: yup
      .string()
      .min(10, "This is too short")
      .max(300, "This is too long string identity")
      .required("Textarea is Required"),
    textareatwo: yup
      .string()
      .min(10, "This is too short")
      .max(300, "This is too long string identity")
      .required("Textarea is Required"),
    checkone: yup.string().required("Field is Required"),
    checktwo: yup.array().required("Field is Required"),
  });
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        first: "",
        last: "",
        email: "",
        number: "",
        password: "",
        confirm: "",
        gender: "",
        country: "",
        textareaone: "",
        textareatwo: "",
        checkone: "",
        checktwo: "",

      }}
      // onSubmit={(values,action) => {
      //   console.log(values);
      //   action.resetForm();
      // }}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values,  null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values,handleSubmit,errors,touched,isSubmitting}) => (
  // return (
    <>
      <Header />
      <section id="contact-page">
        <div className="contact-page-map">
          <img
            className="contact-page-map-img hide-img lazyload"
            data-sizes="auto"
            src="assets/images/contact-page-map.jpg"
            alt="click to activate map"
          />
          <div
            id="my-fast-map"
            className="lazyload"
            
            data-sizes="auto"
            data-iframe-width="100%"
            data-iframe-height={350}
            data-iframe-src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27204.486514455544!2d74.38864918505867!3d31.536220284112016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919050e085e7535%3A0xfbf788dae725f245!2sLahore+Cantt.%2C+Lahore%2C+Pakistan!5e0!3m2!1sen!2sus!4v1510359634902"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27204.486514455544!2d74.38864918505867!3d31.536220284112016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919050e085e7535%3A0xfbf788dae725f245!2sLahore+Cantt.%2C+Lahore%2C+Pakistan!5e0!3m2!1sen!2sus!4v1510359634902"
              width="100%"
              height={350}
              allowFullScreen
              className="lazyload"
            
            data-sizes="auto"
            ></iframe>
          </div>
        </div>
        <div className="holder">
          <div className="contact-page-form-holder">
            <div className="custom-heading">
              <h2>Contact Us</h2>
            </div>
            <Form
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
                      {/* <input
                        type="text"
                        className="input-field"
                        placeholder="Your Full name"
                        id="user-name"
                        minLength={10}
                        required
                      /> */}
                      <Field
                                className="input-field"
                                placeholder="Muhammad"
                                name="first"
                                id="fname"
                                type="text"
                              />
                              
                              <label htmlFor="name" className="err">
                              {errors.first && touched.first }
                                <ErrorMessage name="first" />
                              </label>
                      <strong className="user_name-icon" />
                    </span>
                  </div>
                  <div className="row">
                    <span className="email">
                    <Field
                                className="input-field"
                                placeholder="meharjunadi950@gmail.com"
                                type="email"
                                id="email"
                                name="email"
                              />
                              <label htmlFor="name" className="err">
                                <ErrorMessage name="email" />
                              </label>
                      <strong className="email-icon" />
                    </span>
                  </div>
                  <div className="row">
                    <span className="phone">
                      <Field
                        type="text"
                        className="input-field"
                        placeholder="+92-323-4856-231"
                        id="phone"
                        name="number"
                      />
                      <label htmlFor="name" className="err">
                                <ErrorMessage name="number" />
                              </label>
                      <strong className="phone-icon" />
                    </span>
                  </div>
                </div>
                <div className="columns">
                  <div className="row">
                    <span className="subject">
                      <Field
                        type="text"
                        placeholder="Subject"
                        id="subject"
                        className="input-field"
                        name="textareaone"
                        required
                      />
                      <label htmlFor="name" className="err">
                                <ErrorMessage name="textareaone" />
                              </label>
                      <strong className="subject-icon" />
                    </span>
                  </div>
                  <div className="row">
                    <span className="message">
                      <Field
                        className="input-field"
                        placeholder="message"
                        id="message"
                        minLength={20}
                        name="textareatwo"
                        defaultValue={""}
                      />
                      <label htmlFor="name" className="err">
                                <ErrorMessage name="textareatwo" />
                              </label>
                      <strong className="message-icon" />
                    </span>
                  </div>
                  <div className="row">
                    <img src="assets/images/robot-img.png" alt="" className="lazyload" data-sizes="auto" />
                  </div>
                </div>
              </div>
              <div className="row">
                <button type="submit">Submit</button>
              </div>
            </Form>
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
  )}
  </Formik>
);
};

export default Contact;
