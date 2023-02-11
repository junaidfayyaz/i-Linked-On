import React from 'react'
import './SignIn.css'
import socialimg from '../../Images/social-image.png'
import businessimg from '../../Images/business-image.png'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'lazysizes'
const SignIn = () => {
  
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
    <section id="signin-page">
    <div className="two-columns">
      <div className="columns">
        <h2>ILINKEDON- THINK-TANK</h2>
        <div className="image-holder">
          <img src={businessimg} alt="Business Image" className="lazyload" data-sizes="auto"/>
        </div>
      </div>
      <div className="columns">
        <h2>ILINKEDON- SHARE YOUR LOVE</h2>
        <div className="image-holder">
          <img src={socialimg} alt="Social Image" className="lazyload" data-sizes="auto"/>
        </div>
      </div>
    </div>
    <div className="holder">
      <div className="signin-form-holder">
        <div className="custom-heading">
          <h2>Sign In</h2>
        </div>
        <Form className="signin-form" onSubmit={handleSubmit}>
          <div className="row">
            <span className="email">
              {/* <input className="input-field" placeholder="Email" defaultValue="demo@ilinkedon.com" type="email" name="email" id="email" required /> */}
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
              <strong className="email-icon" />
            </span>
          </div>
          <div className="row">
            <span className="password">
              {/* <input className="input-field" placeholder="Password" defaultValue={1234567890} id="password" type="password" name="password" minLength={10} required /> */}
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
          <div className="row">
            <Link className="forgot-password-link" to='/forget-password' >If you've forgotten your iLinkedOn Password?</Link>
          </div>
          <div className="row">
            <label className="keep-signin false" htmlFor="keep-signin">
              <span className="keep-signin-box" />
              <input type="checkbox" id="keep-signin" />
            </label>
            <strong>Keep me in signed in</strong>
          </div>
          <div className="row">
            <input type="submit" className="signin-btn" defaultValue="Sign in" />
          </div>
          <div className="row">
            <p className="dont-have-account-text">What you takes iLinkedOn? Click here for <a href="signup.html">Sign up</a></p>
          </div>
        </Form>
        <ul className="other-signin">
          <li className="sign-in-facebook"><a href="#">Sign in with Facebook</a></li>
          <li className="sign-in-linkedin"><a href="#">Sign in with Linkedin</a></li>
        </ul>
      </div>
    </div>
    <span className="ilinkedon-logo-custom left" />
    <span className="ilinkedon-logo-custom right" />
  </section>
  <Footer/>
  </>
  )}
  </Formik>
);
};

export default SignIn