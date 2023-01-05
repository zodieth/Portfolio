import React from "react";
import { UilMouseAlt, UilAngleDown } from "@iconscout/react-unicons";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <UilMouseAlt className="uil uil-mouse-alt" />

        <span className="home__scroll-name">Scroll Down</span>
        <UilAngleDown className="uil uil-angle-down home__scroll-arrow" />
      </a>
    </div>
  );
};

export default ScrollDown;
