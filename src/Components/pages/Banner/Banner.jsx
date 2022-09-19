import React from 'react'
import './banner.css'
import mainbanner from "../../Images/main-banner.jpg";
import car from "../../Images/car.png"
// import googleplaybutton from "../../Images/google-play-btn.svg";
// import appstorebtn from "../../Images/app-store-btn.svg";

const Banner = () => {
  return (
    <div class="slider-section">
      <div class="bx-wrapper">
        <div class="bx-viewport" aria-live="polite">
          <ul class="bxslider">
            <li aria-hidden="false">
              <img src={mainbanner} alt="Banner" className="banner" />
              <div class="car loaded">
                <img src={car} alt="Car" />
                <span class="car-right-light"></span>
                <span class="car-left-light"></span>
              </div>
            </li>
            <li aria-hidden="true">
              <img src={mainbanner} alt="Banner" className="banner" />
              <div class="car loaded">
                <img src={car} alt="Car" />
                <span class="car-right-light"></span>
                <span class="car-left-light"></span>
              </div>
            </li>
            <li aria-hidden="true">
              <img src={mainbanner} alt="Banner" className="banner" />
              <div class="car loaded">
                <img src={car} alt="Car" />
                <span class="car-right-light"></span>
                <span class="car-left-light"></span>
              </div>
            </li>
          </ul>
        </div>
        <div class="bx-controls bx-has-pager">
          <div class="bx-pager bx-default-pager">
            <div class="bx-pager-item">
              <a href="" data-slide-index="0" class="bx-pager-link active">
                1
              </a>
            </div>
            <div class="bx-pager-item">
              <a href="" data-slide-index="1" class="bx-pager-link">
                2
              </a>
            </div>
            <div class="bx-pager-item">
              <a href="" data-slide-index="2" class="bx-pager-link">
                3
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="slider-control">
        <ul>
          <li id="slider-prev">
            <a class="bx-prev" href="">
              Prev
            </a>
          </li>
          <li id="slider-next">
            <a class="bx-next" href="">
              Next
            </a>
          </li>
        </ul>
          </div>
          <div class="bxslider-position">
                <div class="bxslider-table">
                    <div class="bxslider-table-cell">
                        <div class="holder">
                            <div class="bxslider-content">
                                <h2>We save you money moving</h2>
                                <h3>Anything, Anywhere</h3>
                                <h4>The PK’s favourite delivery, removals and transport company !</h4>
                                <form class="banner-form" action="#">
                                    <div class="form-row">
                                        <input type="text" placeholder="Pick up location"/>
                                        <input type="text" placeholder="Drop off location"/>
                                    </div>
                                    <div class="form-row">
                                        <button type="submit">Get Instant Prices</button>
                                    </div>
                                    <div class="form-row">
                                        <ul class="rating">
                                            <li>★</li>
                                            <li>★</li>
                                            <li>★</li>
                                            <li>★</li>
                                            <li>★</li>
                                        </ul>
                                        <span class="seconds-text">Takes only 15 seconds</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Banner