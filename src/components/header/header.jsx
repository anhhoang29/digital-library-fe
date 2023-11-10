import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const handleCategoriesClick = () => {
    setShowSubMenu(!showSubMenu);
  };
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <nav className="menu">
        <div className="menu-item" onClick={handleCategoriesClick}>
            <div className="menu-label">Categories</div>
            <FontAwesomeIcon icon={faCaretDown} className="menu-icon" />
            {showSubMenu && (
              <ul className="submenu">
                <li><a href="#">Category 1</a></li>
                <li><a href="#">Category 2</a></li>
              </ul>
            )}
          </div>
          <div className="menu-item">
            <div className="menu-label">Universities</div>
            <div className="menu-divider"></div>
          </div>
          <div className="menu-item">
            <div className="menu-label">Books</div>
          </div>
        </nav>
        <nav className="menu-login">
          <div className="menu-item">
            <div className="contact-us">Contact Us</div>
          </div>
          <div className="menu-item">
            <a href="/login" className="login-item">Login</a>
          </div>
          <div className="menu-item">
            <button className="signup">
              <a href="./register" className="signup-free">Sign up free →</a>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
