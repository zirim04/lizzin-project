import React from "react";
import introLizzin from "/intro_lizzin.png";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner_container">
      <div className="banner_img">
        <img
          src={introLizzin}
          alt="welcome screens of Lizzin Mobile App"
          className="intro_lizzin_img"
        />
      </div>

      <div className="banner_info">
        <h1>Take your music <span>everywhere!</span></h1>
        <p>Download our <span>mobile app</span> now and enjoy uninterrupted music on-the-go!</p>
        <button>Download for Free</button>
      </div>
      
    </div>
  );
};

export default Banner;
