import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo">
          <div className="library1" />
          <img className="library21" src="https://via.placeholder.com/197x79" alt="Library Logo" />
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
