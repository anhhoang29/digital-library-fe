import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="header">
        <div className="sign-in-text">Sign in to </div>
        <div className="app-name">Digital Library Education</div>
      </div>
      <div className="registration">
        <div className="registration-text">If you don’t have an account, register</div>
        <div className="register-link">
          <span>You can   </span>
          <span id="register-here-link">Register here !</span>
        </div>
      </div>
      <div className="login-form">
        <div className="email-username">
          <div className="input-field">
            <div className="input-box">
              <div className="input-background"></div>
              <input type="text" className="email-username-input" placeholder="Enter email or user name" />
            </div>
          </div>
        </div>
        <div className="password">
          <div className="input-field">
            <div className="input-box">
              <div className="input-background"></div>
              <input type="password" className="password-input" placeholder="Password" />
              <div className="password-toggle">
                <div className="toggle-group">
                  <div className="toggle-vector"></div>
                  <div className="toggle-vector"></div>
                  <div className="toggle-vector"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="forgot-password-link">Forgot password ?</div>
        </div>
        <div className="login-button">
          <div className="login-button-background"></div>
          <div className="login-text">Login</div>
        </div>
        <div className="continue-with-text">or continue with</div>
        <div className="sign-in-text">Sign in</div>
      </div>
      <img className="library-image" src="https://via.placeholder.com/326x152" />
      <div className="google-sign-in">
        <div className="google-vector"></div>
        <div className="google-vector"></div>
        <div className="google-vector"></div>
        <div className="google-vector"></div>
      </div>
    </div>
  );
};

export default Login;
