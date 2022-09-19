import React from 'react'
import './form.css'
import transparent from "../../Images/transparent.gif";
const Form = () => {
  return (
    <div>
      <section id="join-now-section">
        <div class="holder">
          <div class="join-form-holder">
            <h2>
              <span class="ilinkedon-logo-medium"></span>
              <span>-Be Great at what you do</span>
            </h2>
            <h3>Get started - it’s free.</h3>
            <form class="join-form" novalidate="novalidate">
              <div class="row">
                <div class="columns-row">
                  <div class="row">
                    <div class="columns">
                      <span class="fname">
                        <input
                          class="input-field"
                          placeholder="First Name"
                          value="Muhammad"
                          id="fname"
                          type="text"
                          minlength="5"
                          required=""
                        />
                        <strong class="fname-icon"></strong>
                      </span>
                    </div>
                    <div class="columns">
                      <span class="lname">
                        <input
                          class="input-field"
                          placeholder="Last Name"
                          value="Junaid"
                          id="lname"
                          type="text"
                          minlength="4"
                          name="lname"
                          required=""
                        />
                        <strong class="lname-icon"></strong>
                      </span>
                    </div>
                  </div>

                  <div class="row">
                    <div class="columns">
                      <span class="email">
                        <input
                          class="input-field"
                          placeholder="Email"
                          value="meharjunaid950@gmail.com"
                          type="email"
                          name="email"
                          id="email"
                          required=""
                        />
                        <strong class="email-icon"></strong>
                      </span>
                    </div>
                    <div class="columns">
                      <span class="phone">
                        <input
                          class="input-field"
                          placeholder="Phone"
                          value="+92-323-485-6231"
                          id="phone"
                          type="text"
                          minlength="10"
                          name="phone"
                          required=""
                        />
                        <strong class="phone-icon"></strong>
                      </span>
                    </div>
                  </div>

                  <div class="row">
                    <div class="columns">
                      <div class="row">
                        <span class="password">
                          <input
                            class="input-field"
                            placeholder="Password"
                            value="1234567890"
                            id="password"
                            type="password"
                            name="password"
                            minlength="10"
                            required=""
                          />
                          <strong class="password-icon"></strong>
                        </span>
                      </div>
                      <div class="row">
                        <span class="confirm-password">
                          <input
                            class="input-field"
                            placeholder="Re-Enter Password"
                            value="1234567890"
                            id="confirm-password"
                            type="password"
                            name="confirm-password"
                            minlength="10"
                            required=""
                          />
                          <strong class="confirm-password-icon"></strong>
                        </span>
                      </div>
                    </div>
                    <div class="columns">
                      <label for="upload-image">Upload Photo</label>
                      <span class="upload-image">
                        <input
                          id="upload-image"
                          type="file"
                          accept="image/*"
                          title="Upload Image"
                        />
                        <img
                          id="myImg"
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
                <button type="submit">Join Now</button>
              </div>
              <div class="row">
                <ul class="other-signin">
                  <li class="sign-in-facebook">
                    <a href="#">Sign up with Facebook</a>
                  </li>
                  <li class="sign-in-linkedin">
                    <a href="#">Sign up with Linkedin</a>
                  </li>
                </ul>
              </div>
            </form>
            <span class="ilinkedon-logo-custom"></span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form