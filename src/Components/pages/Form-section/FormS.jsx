import React from 'react'
import * as yup from "yup";
import './form.css'
import transparent from "../../Images/transparent.gif";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'lazysizes';
const FormS = () => {

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
 
    <div>
      <section id="join-now-section">
        <div class="holder">
          <div class="join-form-holder">
            <h2>
              <span class="ilinkedon-logo-medium"></span>
              <span>-Be Great at what you do</span>
            </h2>
            <h3>Get started - it’s free.</h3>
            <Form class="join-form" onSubmit={handleSubmit}>
              <div class="row">
                <div class="columns-row">
                  <div class="row">
                    <div class="columns">
                      <span class="fname">
                        {/* <input
                          class="input-field"
                          placeholder="First Name"
                          value="Muhammad"
                          id="fname"
                          type="text"
                          minlength="5"
                          required=""
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
                        <strong class="fname-icon"></strong>
                      </span>
                    </div>
                    <div class="columns">
                      <span class="lname">
                      <Field
                                className="input-field"
                                placeholder="Junaid"
                                name="last"
                                id="lname"
                                type="text"
                              />
                              <label htmlFor="name" className="err">
                                <ErrorMessage name="last" />
                              </label>
                        <strong class="lname-icon"></strong>
                      </span>
                    </div>
                  </div>

                  <div class="row">
                    <div class="columns">
                      <span class="email">
                      <Field
                                className="input-field"
                                placeholder="meharjunaid950@gmail.com"
                                type="email"
                                id="email"
                                name="email"
                              />
                              <label htmlFor="name" className="err">
                                <ErrorMessage name="email" />
                              </label>
                        <strong class="email-icon"></strong>
                      </span>
                    </div>
                    <div class="columns">
                      <span class="phone">
                      <Field
                                className="input-field"
                                placeholder="+92-323-4856-231"
                                id="phone"
                                type="number"
                                name="number"
                              />
                              <label htmlFor="name" className="err">
                                <ErrorMessage name="number" />
                              </label>
                        <strong class="phone-icon"></strong>
                      </span>
                    </div>
                  </div>

                  <div class="row">
                    <div class="columns">
                      <div class="row">
                        <span class="password">
                        <Field
                                className="input-field"
                                placeholder="Password"
                                // id="password"
                                type="password"
                                name="password"
                              />
                              <label htmlFor="name" className="err">
                                <ErrorMessage name="password" />
                              </label>
                          <strong class="password-icon"></strong>
                        </span>
                      </div>
                      <div class="row">
                        <span class="confirm-password">
                        <Field
                                className="input-field"
                                placeholder="Re-Enter Password"
                                // id="confirm-password"
                                type="password"
                                name="confirm"
                              />
                              <label htmlFor="name" className="err">
                                <ErrorMessage name="confirm" />
                              </label>
                          <strong class="confirm-password-icon"></strong>
                        </span>
                      </div>
                    </div>
                    <div class="columns">
                      {/* <label for="upload-image">Upload Photo</label> */}
                      <span class="upload-image">
                        <input
                          id="upload-image"
                          type="file"
                          accept="image/*"
                          title="Upload Image"
                        />
                        <img
                          id="myImg"
                          className="lazyload" data-sizes="auto"
                          src={transparent}
                          height="50"
                          width="50"
                          alt="Upload Image"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <p>
                  <label
                    class="agreement-checkbox false"
                    for="agreement-checkbox"
                  >
                    <input id="agreement-checkbox" type="checkbox" />
                  </label>
                  <span>By clicking Join now, you agree to the</span>
                  <span class="ilinkedon-logo-small"></span>
                  <span>
                    User <a href="#">Agreement,</a>{" "}
                    <a href="#">Privacy Policy,</a> and{" "}
                    <a href="#">Cookie Policy.</a>
                  </span>
                </p>
              </div>
              <div class="row">
              <button type="submit" disabled={isSubmitting}>Join Now</button>
              </div>
              <div class="row">
                <ul class="other-signin">
                  <li class="sign-in-facebook">
                    <a href="https://facebook.com/">Sign up with Facebook</a>
                  </li>
                  <li class="sign-in-linkedin">
                    <a href="https://linkedin.com/">Sign up with Linkedin</a>
                  </li>
                </ul>
              </div>
            </Form>
            <span class="ilinkedon-logo-custom"></span>
          </div>
        </div>
      </section>
    </div>
  )}
  </Formik>
);
};

export default FormS
