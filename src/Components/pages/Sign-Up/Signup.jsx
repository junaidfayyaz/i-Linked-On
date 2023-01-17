import React from 'react'
import './Signup.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
const Signup = () => {

  

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
      .max(12345678912, "Number is Invaliud")
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
  //   onSubmit={(values,action) => {
  //     console.log(values);
  //     action.resetForm();
  //   }}

    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log(JSON.stringify(values,  null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ values,handleSubmit,errors,touched,isSubmitting}) => (
    <>
    <Header/>
    <section id="signup-page">
        <div className="holder">
          <div className="signup-form-holder">
            <div className="custom-heading">
              <h2>Create an Account</h2>
            </div>
            <Form className="signup-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="columns-row">
                  <div className="row">
                    <div className="columns">
                      <span className="fname">
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
                        <strong className="fname-icon" />
                      </span>
                    </div>
                    <div className="columns">
                      <span className="lname">
                        {/* <input className="input-field" placeholder="Last Name" id="lname" type="text" minLength={10} name="lname" required /> */}
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
                        <strong className="lname-icon" />
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="columns">
                      <span className="email">
                        {/* <input className="input-field" placeholder="Email" type="email" name="email" id="email" required /> */}
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
                    <div className="columns">
                      <span className="phone">
                        <div id="phone">
                          <input className="custom-code" placeholder="C Code" defaultValue={+92} disabled type="text" />
                          <input className="custom-network" placeholder="Network" type="text" />
                          <input className="custom-number" placeholder="Number" type="text" />
                          
                        </div>
                        <strong className="phone-icon" />
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="columns">
                      <span className="password">
                        {/* <input className="input-field" placeholder="Password" id="password" type="password" name="password" minLength={10} required /> */}
                        <Field
                                className="input-field"
                                placeholder="Password"
                                id="password"
                                type="password"
                                name="password"
                              />
                              <label htmlFor="name" className="err">
                                <ErrorMessage name="password" />
                              </label>
                        <strong className="password-icon" />
                      </span>
                    </div>
                    <div className="columns">
                      <span className="confirm-password">
                        {/* <input className="input-field" placeholder="Re-Enter Password" id="confirm-password" type="password" name="confirm-password" minLength={10} required /> */}
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
                        <strong className="confirm-password-icon" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <p>
                  <label className="agreement-checkbox false" htmlFor="agreement-checkbox">
                    <input id="agreement-checkbox" type="checkbox" />
                  </label>
                  <span>By clicking Join now, you agree to the</span>
                  <span className="ilinkedon-logo-small" />
                  <span>User <a href="#">Agreement,</a> <a href="#">Privacy Policy,</a> and <a href="#">Cookie Policy.</a></span>
                </p>					
              </div>
              <div className="row">
                <button type="submit">Sign Up</button>
              </div>
              <div className="row">
                <p className="center-align">How you works iLinkedOn? <a href="signin.php">Sign in</a></p>
              </div>
              <div className="row">
                <ul className="other-signin">
                  <li className="sign-in-facebook"><a href="#">Sign up with Facebook</a></li>
                  <li className="sign-in-linkedin"><a href="#">Sign up with Linkedin</a></li>
                </ul>
              </div>
            </Form>
          </div>
        </div>
      </section>
      <Footer/>
      </>
  )}
  </Formik>
);
};

export default Signup