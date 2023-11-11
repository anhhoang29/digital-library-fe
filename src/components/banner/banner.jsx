import React from 'react';

import './banner.css';
import banner2 from '../assets/images/banner2.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <div className="BannerContainer">
      <img className="BannerImage" src={banner2} alt="Banner" />
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
            <FontAwesomeIcon icon={faSearch} className="SearchIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
