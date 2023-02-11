import React from 'react'
import './banner.css'
import mainbanner from "../../Images/main-banner.jpg";
import car from "../../Images/car.png"
import 'lazysizes';
// import a plugin
// import googleplaybutton from "../../Images/google-play-btn.svg";
// import appstorebtn from "../../Images/app-store-btn.svg";

const Banner = () => {
  return (
    <div class="slider-section">
      <div class="bx-wrapper">
        <div class="bx-viewport" aria-live="polite">
          <ul class="bxslider">
            {/* <li aria-hidden="false">
              <img src={mainbanner} alt="Banner" className="banner" />
              <div class="car loaded">
                <img src={car} alt="Car" />
                <span class="car-right-light"></span>
                <span class="car-left-light"></span>
              </div>
            </li> */}
            <li aria-hidden="true">
              <img src={mainbanner} alt="Banner" className="banner lazyload" data-sizes="auto"/>
              <div class="car loaded">
                <img src={car} alt="Car" />
                <span class="car-right-light"></span>
                <span class="car-left-light"></span>
              </div>
            </li>
            <li aria-hidden="true">
              <img src={mainbanner} alt="Banner" className="banner lazyload" data-sizes="auto" />
              <div class="car loaded">
                <img src={car} alt="Car" className="lazyload" data-sizes="auto"/>
                <span class="car-right-light"></span>
                <span class="car-left-light"></span>
              </div>
            </li>
          </ul>
        </div>
        <div class="bx-controls bx-has-pager">
          {/* <div class="bx-pager bx-default-pager">
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
          </div> */}
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
    // <div className="slider-section">
    //     <div className="bx-wrapper" style={{maxWidth: '100%'}}>
    //       <div className="bx-viewport" aria-live="polite" style={{width: '100%', overflow: 'hidden', position: 'relative', height: '515px'}}>
    //         <ul className="bxslider" style={{width: 'auto', position: 'relative'}}>
    //           <li aria-hidden="false" style={{float: 'none', listStyle: 'none', position: 'absolute', width: '1366px', zIndex: 50, display: 'block'}}>
    //           <img src={mainbanner} alt="Banner" className="banner" />                <div className="car loaded">
    //               <img src={car} alt="Car" />
    //               <span className="car-right-light" />
    //               <span className="car-left-light" />
    //             </div>
    //           </li>
    //           <li aria-hidden="false" style={{float: 'none', listStyle: 'none', position: 'absolute', width: '1366px', zIndex: 0, display: 'none'}}>
    //             <img src="assets/images/home-banner/main-banner.jpg" alt="banner image" style={{height: '505px'}} />
    //             <div className="car-loaded">
    //               <img src={car} alt="Car" />
    //               <span className="car-right-light" />
    //               <span className="car-left-light" />
    //             </div>
    //           </li>
    //           <li aria-hidden="false" style={{float: 'none', listStyle: 'none', position: 'absolute', width: '1366px', zIndex: 0, display: 'none'}}>
    //             <img src="assets/images/home-banner/main-banner.jpg" alt="banner image" style={{height: '505px'}} />
    //             <div className="car-loaded">
    //               <img src={car} alt="Car" />
    //               <span className="car-right-light" />
    //               <span className="car-left-light" />
    //             </div>
    //           </li>
    //         </ul>
    //       </div>  
    //       <div className="bx-control bx-has-pager">
    //         <div className="bx-pager bx-default-pager">
    //           <div className="bx-pager-item">
    //             <a href data-slide-index={0} className="bx-pager-link active">1</a>
    //           </div>
    //           <div className="bx-pager-item">
    //             <a href data-slide-index={1} className="bx-pager-link">2</a>
    //           </div>
    //           <div className="bx-pager-item">
    //             <a href data-slide-index={2} className="bx-pager-link">3</a>
    //           </div>
    //         </div>
    //       </div>         
    //     </div>
    //     <div className="slider-control">
    //       <ul>
    //         <li id="slider-prev">
    //           <a href className="bx-prev">prev</a>
    //         </li>
    //         <li id="slider-next">
    //           <a href className="bx-next">next</a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="slider-download-buttons">
    //       <ul className="download-buttons">
    //         <li className="play-store-btn">
    //           <a href="#">
    //             <img src="assets/images/google-play-btn.svg" alt="google play" />
    //           </a>
    //         </li>
    //         <li className="app-store-btn">
    //           <a href="#">
    //             <img src="assets/images/app-store-btn.svg" alt="app store" />
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="bxslider-position">
    //       <div className="bxslider-table">
    //         <div className="bxslider-table-cell">
    //           <div className="holder">
    //             <div className="bxslider-content">
    //               <h2>We save you money moving</h2>
    //               <h3>Anything, Anywhere</h3>
    //               <h4>The PK's favourite delivery, removals and transport company !</h4>
    //               <form className="banner-form" action="#">
    //                 <div className="form-row">
    //                   <a href="#" className="moving-button">
    //                     What are you moving?
    //                   </a>
    //                   <div className="moving-block">
    //                     <div className="moving-menu-list">
    //                       <ul>
    //                         <li className="moving-menu-furniture">
    //                           <a href="#">
    //                             Furniture and Appliances
    //                           </a>
    //                         </li>
    //                         <li className="moving-menu-home">
    //                           <a href="#">
    //                             Home Removals
    //                           </a>
    //                         </li>
    //                         <li className="moving-menu-cars active">
    //                           <a href="#">
    //                             Cars and Vehicles
    //                           </a>
    //                         </li>
    //                         <li className="moving-menu-motorbikes">
    //                           <a href="#">
    //                             Motorbikes
    //                           </a>
    //                         </li>
    //                         <li className="moving-menu-parcels">
    //                           <a href="#">
    //                             Packaged Items and Parcels
    //                           </a>
    //                         </li>
    //                         <li className="moving-menu-piano">
    //                           <a href="#">
    //                             Piano Delivery
    //                           </a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                     <div className="moving-more-services">
    //                       <h2>More services</h2>
    //                       <ul>
    //                         <li>
    //                           <a href="#">eBay-items</a>
    //                         </li>
    //                         <li>
    //                           <a href="#">Specialist &amp; Antiques</a>
    //                         </li>
    //                         <li>
    //                           <a href="#">Vehicle Parts</a>
    //                         </li>
    //                         <li>
    //                           <a href="#" className="active">Frieght</a>
    //                         </li>
    //                         <li>
    //                           <a href="#">Clearance</a>
    //                         </li>
    //                         <li>
    //                           <a href="#">Boats</a>
    //                         </li>
    //                         <li>
    //                           <a href="#">Office Removals</a>
    //                         </li>
    //                         <li>
    //                           <a href="#">Livestock</a>
    //                         </li>
    //                         <li>
    //                           <a href="#">Man Power Only Other</a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="form-row">
    //                   <input type="text" placeholder="Pick up Location" />
    //                   <input type="text" placeholder="Drop off Location" />
    //                 </div>
    //                 <div className="form-row">
    //                   <button type="submit">GET INSTANT PRICES</button>
    //                 </div>
    //                 <div className="form-row">
    //                   <ul className="rating">
    //                     <li>★</li>
    //                     <li>★</li>
    //                     <li>★</li>
    //                     <li>★</li>
    //                     <li>★</li>
    //                   </ul>
    //                   <span className="second-text">Takes only 15 seconds</span>
    //                 </div>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
}

export default Banner