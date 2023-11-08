import React from "react";
import "./header.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo">
          <div className="logo" />
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="menu">
          <div className="category">
            Category
            <div className="div-after">
              <div className="image">
                <div className="vector"></div>
              </div>
            </div>
          </div>
          <div className="university">
            University
            <div className="div-after"></div>
          </div>
          <div className="books">Books</div>
        </div>
        <div className="menu">
          <div className="contact-us">Contact Us</div>
          <div className="login">Login</div>
          <div className="signup">
            <div className="signup-free">Sign up free →</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
