import React from "react";
import styled from "styled-components";
import { UilMoon, UilSun } from "@iconscout/react-unicons";

const BotonTheme = ({ handleDark, theme }) => {
  return (
    <BottonTheme className="botton__dark" onClick={handleDark}>
      <span className={`${theme ? "noActive" : "active"}`}>
        {/* <i className="uil uil-moon"></i> */}
        <UilMoon className="uil uil-moon" />
      </span>

      <span className={` ${theme ? "active" : "noActive"}`}>
        {/* <i className="uil uil-sun"></i> */}
        <UilSun className="uil uil-sun" />
      </span>
    </BottonTheme>
  );
};

export default BotonTheme;

const BottonTheme = styled.button`
  position: absolute;
  right: 0;
  top: 80px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background: transparent;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 30px;
  width: 30px;
  height: 30px;

  .active {
    display: initial;
    .uil-sun {
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .uil-moon {
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .noActive {
    display: none;
  }

  @media screen and (max-width: 576px) {
    top: 20px;
    margin: 20px;
  }

  @media screen and (max-width: 350px) {
    top: 20px;
    margin: auto;
  }
`;
