import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="BannerContainer">
      <img className="BannerImage" src="https://via.placeholder.com/1753x682" alt="Banner" />
      <div className="SearchBar">
        <div className="InputContainer">
          <div className="SearchInput">
            <input
              type="text"
              placeholder="Search Categories, Books or Documents"
              className="SearchBox"
            />
          </div>
          <div className="SearchIcon">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
