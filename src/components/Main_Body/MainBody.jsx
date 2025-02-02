import React from "react";
import "./mainbody.css";
import Banner from "./Banner";

const MainBody = () => {
  return (
    <div className="main_frame">
      <div className="main_container">
        <div className="popular_artists_container">
          <div className="popular_artists">

          </div>
        </div>

        <div className="banner">
          <Banner />
        </div>

        <div className="popular_artists_container">
          <div className="popular_artists">

          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
