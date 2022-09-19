import React from "react";
import "./booking.css";
import slideimg from "../../Images/slide-img1.png";
const Booking = () => {
  return (
    <div>
      <section id="instant-booking-section">
        <div class="holder">
          <div class="custom-heading">
            <h4>Say Hello to our new instant booking</h4>
          </div>
        </div>
        <div class="instant-booking">
          <div class="bx-wrapper">
            <div class="bx-viewport" id="bx-viewport" aria-live="polite">
              <ul class="instant-booking-slider">
                <li class="bx-clone" aria-hidden="true">
                  <div class="bxslider-table">
                    <div class="bxslider-table-cell">
                      <div class="holder">
                        <div class="bxslider-content">
                          <ul>
                            <li className="unbeat">
                              Unbeatable instant prices
                            </li>
                            <li>Dedicated move co-ordinator</li>
                          </ul>
                          <a class="learn-more-btn" href="#">
                            Learn More
                          </a>
                        </div>
                        <div class="image-holder">
                          <img src={slideimg} alt="Slider Image 2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li aria-hidden="false">
                  <div class="bxslider-table">
                    <div class="bxslider-table-cell">
                      <div class="holder">
                        <div class="bxslider-content">
                          <ul>
                            <li className="unbeat">
                              Unbeatable instant prices
                            </li>
                            <li>Dedicated move co-ordinator</li>
                          </ul>
                          <a class="learn-more-btn" href="#">
                            Learn More
                          </a>
                        </div>
                        <div class="image-holder">
                          <img src={slideimg} alt="Slider Image 1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li aria-hidden="true">
                  <div class="bxslider-table">
                    <div class="bxslider-table-cell">
                      <div class="holder">
                        <div class="bxslider-content">
                          <ul>
                            <li className="unbeat">
                              Unbeatable instant prices
                            </li>
                            <li>Dedicated move co-ordinator</li>
                          </ul>
                          <a class="learn-more-btn" href="#">
                            Learn More
                          </a>
                        </div>
                        <div class="image-holder">
                          <img src={slideimg} alt="Slider Image 2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="bx-clone" aria-hidden="true">
                  <div class="bxslider-table">
                    <div class="bxslider-table-cell">
                      <div class="holder">
                        <div class="bxslider-content">
                          <ul>
                            <li className="unbeat">
                              Unbeatable instant prices
                            </li>
                            <li>Dedicated move co-ordinator</li>
                          </ul>
                          <a class="learn-more-btn" href="#">
                            Learn More
                          </a>
                        </div>
                        <div class="image-holder">
                          <img src={slideimg} alt="Slider Image 1" />
                        </div>
                      </div>
                    </div>
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
              </div>
            </div>
          </div>
          <div class="slider-control">
            <ul>
              <li id="slider-prev2">
                <a class="bx-prev" href="">
                  Prev
                </a>
              </li>
              <li id="slider-next2">
                <a class="bx-next" href="">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
