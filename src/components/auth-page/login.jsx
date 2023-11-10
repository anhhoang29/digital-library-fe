import React from "react";
import "./style.css";
import AuthPage from "./AuthPage";
import Google from '../assets/images/Google.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// Import other necessary components, icons, etc.

function Login() {
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
  return (
    <AuthPage
      title="Sign In"
      hintText="If you don’t have an account, register"
      linkText="Register here !"
      linkUrl="./register"
    >
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
                <input
                  type={showPassword ? "text" : "password"}
                  className="password-input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="password-toggle">
                  <div className="toggle-group" onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <FontAwesomeIcon icon={faEye} className="toggle-icon" />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} className="toggle-icon" />
                    )}
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
    </AuthPage>
  );
}

export default Login;
