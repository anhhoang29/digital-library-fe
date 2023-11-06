import React from "react";
import "./sign-up.css";

const signUp = () => {
  return (
    <div className="login-register-container">
      <div className="signup-group">
        <div className="title-group">
          <div className="signup-title">Sign Up to </div>
          <div className="library-title">Digital Library Education</div>
        </div>
        <div className="login-hint-group">
          <div className="hint-text">If you already have an account</div>
          <div className="login-link-text">
            <span className="normal-text">You can </span>
            <span className="login-link">Login here !</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="email-input-group">
          <div className="input-box"></div>
          <div className="input-label">Enter Email</div>
        </div>
        <div className="username-input-group">
          <div className="input-box"></div>
          <div className="input-label">Create User name</div>
        </div>
        <div className="contact-input-group">
          <div className="input-box"></div>
          <div className="input-label">Contact number</div>
        </div>
        <div className="password-input-group">
          <div className="input-box"></div>
          <div className="input-label">Password</div>
        </div>
        <div className="confirm-password-input-group">
          <div className="input-box"></div>
          <div className="input-label">Confirm Password</div>
        </div>
        <div className="register-button-group">
          <div className="register-button"></div>
          <div className="register-text">Register</div>
        </div>
      </div>
      <div className="or-hint-text">or continue with</div>
      <div className="google-signup-group">
        <div className="google-logo"></div>
        <div className="signup-text">Sign Up</div>
      </div>
      <img
        className="library-logo"
        src="https://via.placeholder.com/326x152"
        alt="Library Logo"
      />
    </div>
  );
};

export default signUp;
