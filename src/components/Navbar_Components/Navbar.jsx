import React from "react";
import "./navbar.css";
import LizzinLogo from "./LizzinLogo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_frame">
        <div className="logo_container">
          <LizzinLogo />
        </div>
        <div className="search_container">
          <SearchBar />
        </div>
        <div className="reg_container">
          <SignIn />
          <div className="reg_line"></div>
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
