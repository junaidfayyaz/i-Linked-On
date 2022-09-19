import React from 'react'
import './logo.css'
import logo1 from "../../Images/logo1.png";
import logo2 from "../../Images/logo2.png";
import logo3 from "../../Images/logo3.png";
import logo4 from "../../Images/logo4.png";
import logo5 from "../../Images/logo5.png";
const Logo = () => {
  return (
    <div><section id="logos-section">
            <div class="logos-holder">
                <div class="bx-wrapper">
                    <div class="bx-viewport" id='logo-section' aria-live="polite">
                        <ul class="logos-slider">
                            <li class="bx-clone"
                                aria-hidden="true">
                                <div class="holder">
                                    <span><img src={logo1} alt="Company Logo"/></span>
                                    <span><img src={logo2} alt="Company Logo"/></span>
                                    <span><img src={logo3} alt="Company Logo"/></span>
                                    <span><img src={logo4} alt="Company Logo"/></span>
                                    <span><img src={logo5} alt="Company Logo"/></span>
                                </div>
                            </li>
                            <li
                                aria-hidden="true">
                                <div class="holder">
                                    <span><img src={logo1} alt="Company Logo"/></span>
                                    <span><img src={logo2} alt="Company Logo"/></span>
                                    <span><img src={logo3} alt="Company Logo"/></span>
                                    <span><img src={logo4} alt="Company Logo"/></span>
                                    <span><img src={logo5} alt="Company Logo"/></span>
                                </div>
                            </li>
                            <li aria-hidden="true"
                                >
                                <div class="holder">
                                    <span><img src={logo1} alt="Company Logo"/></span>
                                    <span><img src={logo2} alt="Company Logo"/></span>
                                    <span><img src={logo3} alt="Company Logo"/></span>
                                    <span><img src={logo4} alt="Company Logo"/></span>
                                    <span><img src={logo5} alt="Company Logo"/></span>
                                </div>
                            </li>
                            <li 
                                aria-hidden="false">
                                <div class="holder">
                                    <span><img src={logo1} alt="Company Logo"/></span>
                                    <span><img src={logo2} alt="Company Logo"/></span>
                                    <span><img src={logo3} alt="Company Logo"/></span>
                                    <span><img src={logo4} alt="Company Logo"/></span>
                                    <span><img src={logo5} alt="Company Logo"/></span>
                                </div>
                            </li>
                            <li  class="bx-clone"
                                aria-hidden="true">
                                <div class="holder">
                                    <span><img src={logo1} alt="Company Logo"/></span>
                                    <span><img src={logo2} alt="Company Logo"/></span>
                                    <span><img src={logo3} alt="Company Logo"/></span>
                                    <span><img src={logo4} alt="Company Logo"/></span>
                                    <span><img src={logo5} alt="Company Logo"/></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="bx-controls bx-has-pager">
                        <div class="bx-pager bx-default-pager">
                            <div class="bx-pager-item"><a href="" data-slide-index="0" class="bx-pager-link">1</a></div>
                            <div class="bx-pager-item"><a href="" data-slide-index="1" class="bx-pager-link">2</a></div>
                            <div class="bx-pager-item"><a href="" data-slide-index="2" class="bx-pager-link active">3</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slider-control">
                    <ul>
                        <li id="slider-prev4"><a class="bx-prev" href="">Prev</a></li>
                        <li id="slider-next4"><a class="bx-next" href="">Next</a></li>
                    </ul>
                </div>
            </div>
        </section></div>
  )
}

export default Logo