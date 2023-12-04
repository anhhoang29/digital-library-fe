import React, { useState } from "react";
import "./style.css";
import AuthPage from "./AuthPage";
// import Google from '../assets/images/google.svg';
import { Group, GroupWrapper} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setError("");


    if (name === "emailOrUsername") {
       
     
    } else if (name === "password") {
    }
    if (name === "emailOrUsername") {
      setEmailOrUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = () => {
    if (!emailOrUsername || !password) {
      setError("Please fill in all fields.");
      return;
    }
  };

  return (
    <AuthPage
      title="Sign in to your account"
      hintText="If you don’t have an account register"
      linkText="register here!"
      linkUrl="./register"
    >
      <div className="login-form">
        {/* Hiển thị thông báo lỗi nếu có */}
        {error && <div className="error-message">{error}</div>}
        <h1 className="sign-in-text-title">Sign in</h1>
        <div className="email-username">
          <div className="input-field">
            <div className="input-box">
              <div className="input-background"></div>
              <input
                type="text"
                className="email-username-input"
                placeholder="Enter email or user name"
                name="emailOrUsername"
                value={emailOrUsername}
                onChange={handleInputChange}
              />
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
                name="password"
                value={password}
                onChange={handleInputChange}
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
          <a href="" className="forgot-password-link">
            Forgot password ?
          </a>
        </div>
        <button className="login-button" type="button" onClick={handleLogin}>
          <div className="login-button-background"></div>
          <div className="login-text">Login</div>
        </button>
        <div className="google-sign-in">
          {/* <p className="continue-with-text">or continue with</p>
          <a
            className="flex items-center lg:gap-[10px] gap-[5px] w-full border rounded-[5px] lg:py-[10px] py-[5px] justify-center border-primary xl:text-base lg:text-sm text-xs hover:bg-athensGray cursor-pointer transition ease-in-out"
            href=""
          >
            <img
              src={Google}
              className="object-cover xl:w-6 w-5"
              alt="Google icon"
            />
            <span className="text-primary">Đăng nhập với Google</span>
          </a> */}
        </div>
      </div>
    </AuthPage>
  );
}

export default Login;
