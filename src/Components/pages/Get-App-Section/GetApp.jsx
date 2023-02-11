import React from 'react'
import qrcode from "../../Images/qr-code.png"
import playstore from "../../Images/play-store-img.png";
import appstore from "../../Images/app-store-img.png";
import "./getapp.css"
import'lazysizes';
const GetApp = () => {
  return (
    <div><section id="get-app-section">
            <div class="holder">
                <div class="custom-heading">
                    <h4><span class="ilinkedon-logo-white"></span>Analytics</h4>
                </div>
                <p>For you to monitor your business productivity, you need a tool that will analyze your financials and give
                    you the real business position and a predictable future of your business.
                    <span class="ilinkedon-logo-white"></span>
                    enables you to get your financials right through our automated system will suggest you the kills which
                    will see the business flourish. Avoid those pitfalls that will plunge your business into unforeseen
                    losses by signing with <span class="ilinkedon-logo-white"></span>.
                </p>
                <div class="get-app-contents">
                    <div class="qr-code-holder">
                        <img src={qrcode} alt="Quick Response Code of iLinkedon" className="lazyload" data-sizes="auto"/>
                    </div>
                    <h5>Download our app with QR Code</h5>
                    <ul class="download-buttons">
                        <li class="play-store-btn">
                            <a href="#"><img src={playstore} alt="Play store btn" className="lazyload" data-sizes="auto"/></a>
                        </li>
                        <li class="app-store-btn">
                            <a href="#"><img src={appstore} alt="App store btn" className="lazyload" data-sizes="auto"/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </section></div>
  )
}

export default GetApp