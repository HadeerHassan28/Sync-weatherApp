import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/images/cloud.png";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-main">
        <div className="container d-flex justify-content-start ">
          <img
            src={logo}
            alt="logo"
            width="50"
            height="30"
            className="d-inline-block align-text-top m-3"
          />
          <span className="text-main fa-lg">
            <strong>WeatherApp</strong>
          </span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
