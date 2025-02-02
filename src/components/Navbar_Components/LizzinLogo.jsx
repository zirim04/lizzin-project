import React from "react";
import lizzLogo from "/Lizzin_logo.png";
import "../Navbar_Components/navbar.css";

const LizzinLogo = (prop) => {
  return (
    <div>
      <img src={lizzLogo} alt="Lizzin's logo" className="lizzin_logo" />
    </div>
  );
};

export default LizzinLogo;
