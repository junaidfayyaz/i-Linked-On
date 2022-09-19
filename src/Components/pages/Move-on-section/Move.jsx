import React from 'react'
import './move.css'
import business from "../../Images/business-image.png";
import social from "../../Images/social-image.png";
const Move = () => {
  return (
    <div>
      <section id="move-on-section">
        <div class="holder">
          <div class="custom-heading">
            <h4>Are You Ready to Move in ?</h4>
          </div>
          <p>
            <span class="ilinkedon-logo-medium"></span>
          </p>
          <div class="move-on-contents">
            <div class="columns">
              <h5>iLinkedOn- Think-Tank</h5>
              <div class="image-holder">
                <img src={business} alt="Business Idea’s Image" />
              </div>
              <div class="image-content">
                <p>
                  Starting a business can be challenging especially to newbie's;
                  beginning a new venture is equally unpredictable. iLinkedOn
                  gives you access to start up ideas to whatever business you've
                  dreamt of. Pose the question and enjoy the innumerable tips
                  available. We will take you step by step to attaining your
                  business goal. Don't kill that dream join iLinkedOn and walk
                  with us to success.
                </p>
              </div>
            </div>
            <div class="columns">
              <h5>iLinkedOn- Share your love</h5>
              <div class="image-holder">
                <img src={social} alt="Socialize Image" />
              </div>
              <div class="image-content">
                <p>
                  Are you a member of iLinkedOn? Waste no time switching to your
                  favorite social network. Facebook, Instagram, Twitter,
                  LinkedIn and all-iLinkedOn 'Share-your-love' allows you to
                  surf through your network of friends at a go. We have saved
                  you the hassle-all under one roof. Enjoy the speed as you
                  download or post those photos or that program. you can as well
                  share your business to your friends and loved ones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Move