import React from "react";
import "./style.css";
import logo from '../assets/images/logo.png';
import Footer from "../footer/Footer";

const AuthPage = ({ children, title, hintText, linkText, linkUrl }) => {
  return (
    <div className="authPage">
      <div className="">
        {/* <a className="w" href="/home">
          <img id="logo" alt="logo" src={logo} />
        </a> */}
        <div className="w-[326px] h-[152px]">
          <img className="fixed w-[326px] h-[152px] top-0 left-0 object-cover" alt="Library" src={logo} />
        </div>
        <div className="header">
          <h1 className="fixed w-[459px] top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[35px] tracking-[0] leading-[normal]">{title}</h1>
          <p className="app-name">Digital Library Education</p>
        </div>
        <div className="w-[321px] h-[24px]">
          <div className="fixed w-[321px] top-0 left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">{hintText}</div>
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
