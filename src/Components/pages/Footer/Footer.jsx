import React from "react";
import "./footer.css";
import map from "../../Images/mapimg.png";
import first from "../../Images/250-250.png";
import { Link } from "react-router-dom";
import "lazysizes";
const Footer = () => {
  return (
    <div>
      <footer id="footer">
        {/* <!-- Top Footer Start --> */}
        <div class="footer-top">
          <div class="holder">
            <div class="footer-three-columns">
              <div class="columns">
                <div class="row">
                  <h5>
                    <span class="ilinkedon-logo-white"></span>
                    Browse
                  </h5>
                  <ul>
                    <li>
                      <Link to='/contact'>Help Us</Link>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </div>
                <div class="row">
                  <h5>
                    <span class="ilinkedon-logo-white"></span>
                    Directory
                  </h5>
                  <ul>
                    <li>
                      <a href="#">Found Members</a>
                    </li>
                    <li>
                      <a href="#">Found People</a>
                    </li>
                    <li>
                      <a href="#">Found Companies</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="columns">
                <h5>
                  <span class="ilinkedon-logo-white"></span>
                  Solutions
                </h5>
                <ul>
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
                  <li>
                    <a href="#">Grab he Cuisine</a>
                  </li>
                  <li>
                    <a href="#">Affordable Homes</a>
                  </li>
                  <li>
                    <a href="#">Buy and Sell with us -ads</a>
                  </li>
                </ul>
              </div>
              <div class="columns">
                <h5>
                  <span class="ilinkedon-logo-white"></span>
                  More
                </h5>
                <ul>
                  <li>
                    <a href="#">Cookies Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="contact-info-holder">
              <div class="map">
                <a target="_blank" href="https://goo.gl/maps/5hFikXWZwHvrK8WB9">
                  <img src={map} alt="Lahore Map" className="lazyload" data-sizes="auto" />
                </a>
                {/* <iframe src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.8918661471166!2d74.41508891500968!3d31.582013051255824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391910054aa98b89%3A0xed7029242a279ba9!2sSalamatpura%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1663602002715!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              </div>
              <div class="contact-us-block">
                <h5>Contact Us</h5>
                <ul>
                  <li class="viber-link">
                    <a href="tel:+923234856231">+92 323 485 6231</a>
                  </li>
                  <li class="whatsapp-link">
                    <a href="tel:+923234856231">+92 323 485 6231</a>
                  </li>
                </ul>
              </div>
              <div class="address-block">
                <h5>Address</h5>
                <address>
                  Salamatpura Lahore,
                  <br />
                  Near Sadaqat Sweet,
                  <br />
                  Lahore, Punjab, Pakistan
                </address>
              </div>
            </div>
          </div>
        </div>
        {/* Top Footer End  */}

        {/* Bottom Footer Start  */}
        <div class="footer-bottom sticky">
          <div class="holder">
            <div class="left-align">
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
                  <a target="_blank" href="https://www.linkedin.com/in/muhammad-j-612a5423a/">
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
              <div class="copyright-text">
                <p>
                  <span>©2022</span>
                  <a href="#" class="ilinkedon-logo-white"></a>
                  <span>.All Right Reserved.</span>
                </p>
              </div>
            </div>
            <div class="right-align">
              <p>Develop, Design &amp; Entrepreneur by Muhammad Junaid</p>
              <a
                target="_blank"
                title="Develop, Design &amp; Entrepreneur by 20thFloor Techease"
                class="twentyfloor-logo"
                href="#"
              >
                {/* <img src={first} alt="20thfloor Logo" /> */}
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Footer End  */}
      </footer>
    </div>
  );
};

export default Footer;
