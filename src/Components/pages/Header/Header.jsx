import React from "react";
import "./header.css";
import img1 from "../../Images/pak-flag.png";
import logo1 from "../../Images/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header id="header">
      <div class="top-header">
        <div class="holder">
          <div class="left-align">
            <a class="email-link" href="meharjunaid950@gmail.com">
              Hello@iLinkedOn.com
            </a>
            <ul class="social-links">
              <li class="facebook-icon">
                <a target="_blank" href="https://www.facebook.com/johny.prince.923/">
                  &nbsp;
                </a>
              </li>
              <li class="twitter-icon">
                <a target="_blank" href="https://twitter.com/">
                  &nbsp;
                </a>
              </li>
              <li class="gplus-icon">
                <a
                  target="_blank"
                  href="https://plus.google.com/"
                >
                  &nbsp;
                </a>
              </li>
              <li class="youtube-icon">
                <a target="_blank" href="https://youtube.com/">
                  &nbsp;
                </a>
              </li>
              <li class="linkedin-icon">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/muhammad-j-612a5423a/"
                >
                  &nbsp;
                </a>
              </li>
              <li class="tumblr-icon">
                <a target="_blank" href="https://tumbler.com/">
                  &nbsp;
                </a>
              </li>
              <li class="pinterest-icon">
                <a target="_blank" href="https://pinterest.com/">
                  &nbsp;
                </a>
              </li>
            </ul>
          </div>
          <div class="right-align">
            <ul class="account-btn-holder">
              <li>
                <span>What you takes iLinkedOn?</span>
                <Link class="signup-btn blue-btn-animated" to='/sign-up'>
                  Sign up
                </Link>
              </li>
              <li>
                <span>How you works iLinkedOn?</span>
                <Link class="signin-btn green-btn-animated" to='/sign-in'>
                  Sign in
                </Link>
              </li>
            </ul>
            <ul class="location-holder">
              <li>
                <img src={img1} alt="Pakistan Flag Image" />
                <span>Pakistan</span>
              </li>
              <li>Lahore</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom-header">
        <div class="header-menu-holder">
          <div class="holder">
            <div class="left-align">
              <div id="cat-menu-btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="logo">
                <a href="#">
                  <img src={logo1} className="logo1" alt="ILinkedon" to='/' />
                </a>
              </div>
            </div>
            <div class="right-align">
              <nav id="main-menu">
                <ul>
                  <li class="active">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">iLinkedon- Solutions</a>
                    <ul class="submenu">
                      <li>
                        <a href="#">iBC</a>
                      </li>
                      <li>
                        <a href="#">Drive your choice -iLinkedOn</a>
                      </li>
                      <li>
                        <a href="#">Behind the Van -Mover</a>
                      </li>
                      <li>
                        <a href="#">U- In the Driver’s seat</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">iLinkedOn Browse</a>
                    <ul class="submenu">
                      <li>
                        <a href="#">Deals / Promotions</a>
                      </li>
                      <li>
                        <a href="#">Tech -Preneur</a>
                      </li>
                      <li>
                        <a href="#">Hustler’s -Job Corner</a>
                      </li>
                      <li>
                        <a href="#">Employer/Employee -Meeting Point</a>
                      </li>
                      <li>
                        <a href="#">Grab the Cuisine</a>
                      </li>
                      <li>
                        <a href="#">Affordable Homes</a>
                      </li>
                      <li>
                        <a href="#">Buy and Sell with us -ads</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Business Startup Ideas</a>
                    <ul class="submenu">
                      <li>
                        <a href="#">Lorem ipsum dolor</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum dolor</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum dolor</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum dolor</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum dolor</a>
                      </li>
                    </ul>
                  </li>
                  <li class="help-us-mobile">
                    <a href="#">Help Us</a>
                  </li>
                </ul>
                <a class="drive-width-btn" href="#">
                  <span class="drive-text">Drive with</span>
                  <span class="ilinkedon-logo-custom"></span>
                </a>
              </nav>
              <div id="mobile-menu-btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <nav class="category-menu">
          <ul class="holder">
            <li class="ebc-link">
              <a href="#">iBC</a>
            </li>
            <li class="t-innovations-link">
              <a href="#">Tech -Preneur</a>
            </li>
            <li class="c-ads-link">
              <a href="#">Buy and Sell with us -ads</a>
            </li>
            <li class="d-promotions-link">
              <a href="#">Deals / Promotions</a>
            </li>
            <li class="vehicles-link">
              <a href="#">Drive your car -iLinkedOn</a>
            </li>
            <li class="property-link">
              <a href="#">Affordable Homes</a>
            </li>
            <li class="recruitments-link">
              <a href="#">Hustler’s -Job Corner</a>
            </li>
            <li class="jobs-link">
              <a href="#">Employer/Employee -Meeting Point</a>
            </li>
            <li class="restaurants-link">
              <a href="#">Grab the Cuisine </a>
            </li>
            <li class="d-us-link">
              <a href="#">U- In the Driver’s seat</a>
            </li>
            <li class="m-van-link">
              <a href="#">Behind the Van -Mover</a>
            </li>
            <li class="s-bike-link">
              <a href="#">Man on the Bike</a>
            </li>
            <li class="malls-link">
              <a href="#">Malls</a>
            </li>
            <li class="brands-link">
              <a href="#">Brands</a>
            </li>
            <li class="services-link">
              <a href="#">Services</a>
            </li>
            <li class="blog-link">
              <a href="#">Blog</a>
            </li>
            <li class="marketing-link">
              <a href="#">Marketing</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
