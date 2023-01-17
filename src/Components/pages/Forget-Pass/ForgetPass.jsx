import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './ForgetPass.css'

const ForgetPass = () => {
  return (
    <>
    <Header/>
    <section id="forget-page" style={{minHeight: '223px'}}>
        <div className="holder">
          <div className="forget-form-holder">
            <div className="custom-heading">
              <h2>Recover Your Account</h2>
            </div>
            <form className="forget-form" action="#">
              <div className="row">
                <span className="email"><input placeholder="Enter Recovery Your eMail" type="email" name="email" id="email" required /></span>
                <p className="dont-have-account-text">What you takes iLinkedOn? Click here for 
                  <a href="signup.php">Sign up</a>
                </p>
              </div>
              <div className="row">
                <input type="submit" className="forget-btn" defaultValue="Recover Account" />
                <p className="dont-have-account-text">How you works iLinkedOn? Click here on Join us
                  <a href="signin.php">Signin</a>
                </p>
              </div>
            </form>
          </div>
        </div>
        <span className="ilinkedon-logo-custom left" />
        <span className="ilinkedon-logo-custom right" />
      </section>
      <Footer/>
      </>
  )
}

export default ForgetPass