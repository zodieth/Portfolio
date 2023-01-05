import React from "react";
import "./Scrollup.scss";
// import "../../../css/components/Scrollup/Scrollup/scss";
import { UilArrowUp } from "@iconscout/react-unicons";

const Scrollup = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    // else scrollUp.classlist.remove("show-scroll");
  });
  return (
    <a className="scrollup" href="#">
      {/* <i className="uil uil-arrow-up scrollup__icon"></i> */}
      <UilArrowUp className="uil uil-arrow-up scrollup__icon" />
    </a>
  );
};

export default Scrollup;
