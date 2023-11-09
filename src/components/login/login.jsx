import React from "react";
import "./login.css";
import Home from "../home/home";
import logo from '../assets/images/logo.png';
import Google from '../assets/images/Google.svg';

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div className="login-container">
      <a href="/home">
        <img id="logo" alt="logo" src={logo} />
      </a>
      <div className="header">
        <h1 className="sign-in-text">Sign in to </h1>
        <p className="app-name">Digital Library Education</p>
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
        <button className="login-button" type="button">
          <div className="login-button-background"></div>
          <div className="login-text">Login</div>
        </button>
        <div className="google-sign-in">
          <p className="continue-with-text">or continue with</p>
          <a
            className='flex items-center lg:gap-[10px] gap-[5px] w-full border rounded-[5px] lg:py-[10px] py-[5px] justify-center border-primary xl:text-base lg:text-sm text-xs hover:bg-athensGray cursor-pointer transition ease-in-out'
            href=""
          >
            <img
              src={Google}
              className='object-cover xl:w-6 w-5'
              alt='Google icon'
            />
            <span className='text-primary'>Đăng nhập với Google</span>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Login;