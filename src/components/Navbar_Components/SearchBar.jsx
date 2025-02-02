"use client";

import React from "react";
import "../../icon-width.css";
import "./searchBar.css";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="search_container">
      <form action="" className="search_form">
        <input
          type="text"
          placeholder="search for your favourite songs, artists, albums, playlists..."
        />
        <button className="search_btn">
          <BiSearch className="search_icon icon-n" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
