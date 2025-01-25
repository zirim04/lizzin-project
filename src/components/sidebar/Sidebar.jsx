import React from "react";
import "./sidebar.css";
import "../../icon-width.css";
import { RiHome6Line } from "react-icons/ri";
import { BiLibrary, BiPlus, BiSearch } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="side_bar">
      <div className="side_bar_top">
        <div className="side_home">
          <RiHome6Line className="icon-n" />
          <p>Home</p>
        </div>
        <div className="side_search">
          <BiSearch className="icon-n" />
          <p>Search</p>
        </div>
      </div>

      <div className="side_bar_main">
        <div className="side_main_top">
          <div className="side_library">
            <BiLibrary className="icon-l" />
            <p>Your Library</p>
          </div>
          <div className="side_main_tr">
            <FaArrowRight className="icon-sn icon-btn" />
            <FaPlus className="icon-sn icon-btn" />
          </div>
        </div>
        <div className="side_main_middle">
            <h1>Create your first playlist</h1>
            <p>We're here to help</p>
            <button className="playlist-btn">Create Playlist</button>
        </div>

        <div className="side_main_middle side_main_middle2">
            <h1>Find a podcast</h1>
            <p>We'll keep you posted on new episodes</p>
            <button className="playlist-btn">Browse Podcast</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
