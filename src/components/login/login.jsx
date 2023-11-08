import React from "react";
import "./login.css";
import Home from "../home/home";
import logo from "../assets/images/logo.png";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div className="login-container">
      <div className="header">
        <h1 className="sign-in-text">Sign in to </h1>
        <h1 className="app-name">Digital Library Education</h1>
        <a href="/home">
        <img id="logo" alt="Company Logo" src={logo} />
      </a>
      </div>
      <div className="registration">
        <div className="registration-text">If you don’t have an account, register</div>
        <div className="register-link">
          <span>You can   </span>
          <span id="register-here-link">Register here !</span>
        </div>
      </div>
      <div className="login-form">
        <h1 className="sign-in-text-title">Sign in</h1>
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
          <a href="" className="forgot-password-link">Forgot password ?</a>
        </div>
        <button id="login-button">
          <div className="login-button-background"></div>
          <div className="login-text">Login</div>
        </button>
        <div className="continue-with-text">or continue with</div>
      </div>

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
