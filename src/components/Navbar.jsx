import React from "react";
import Cart from "./Cart";
import logo from "../images/logo.png";

const Navbar = () => {
  let count = 1;
  return (
    <div className="nav_container">
      <img className="logo" src={logo} alt="logo" />
      <div className="heading">Home Page</div>
    </div>
  );
};

export default Navbar;
