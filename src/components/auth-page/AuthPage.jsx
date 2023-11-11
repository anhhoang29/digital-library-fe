import React from "react";
import "./style.css";
import logo from '../assets/images/logo.png';
import Footer from "../footer/Footer";

const AuthPage = ({ children, title, hintText, linkText, linkUrl }) => {
  return (
    <div className="authPage">
      <div className="auth-container">
        <a href="/home">
          <img id="logo" alt="logo" src={logo} />
        </a>
        <div className="header">
          <h1 className="auth-title">{title}</h1>
          <p className="app-name">Digital Library Education</p>
        </div>
        <div className="registration">
          <div className="registration-text">{hintText}</div>
          <div className="register-link">
            <span>You can </span>
            <a href={linkUrl} className="auth-link">{linkText}</a>
          </div>
        </div>
        <div className="auth-form">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthPage;
