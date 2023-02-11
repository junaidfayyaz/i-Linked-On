import 'lazysizes';
import React from 'react'
import './Video.css'

const Video = () => {
  return (
    <div>
      <section id="section1">
        <div class="holder">
          <div class="section1-content">
            <h2>
              <span class="ilinkedon-logo-medium"></span>
              <span>-The Global Solution Provider</span>
            </h2>
            <p>
              <span class="ilinkedon-logo-extra-small"></span> is a digital
              platform that uses the web, and mobile app linked to form an
              interface that is meant to provide business and social solutions
              to the members. It’s an interface that companies and individuals
              can join for free by registering through a simple process. It is
              an ‘all under one roof’ based platform, which aims to cover the
              diverse and vibrant market in Pakistan and the world over; the
              platform links your business to other businesses and allows you to
              do business as you socialize. With iLinkedOn, you don’t have to
              keep switching to attend to that business assignment and getting
              back to an essential social conversation or even getting business
              updates- all this you get on one page.
            </p>
          </div>
          <div class="section1-video">
            <span class="ilinkedon-logo-large"></span>
            <iframe
            className="lazyload" data-sizes="auto"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NVPxmz_PvUw"
              allowfullscreen=""
              title='yt'
            ></iframe>
          </div>
        </div>
        <span class="ilinkedon-logo-custom"></span>
      </section>
    </div>
  );
}

export default Video