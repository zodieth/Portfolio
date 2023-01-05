import React from "react";
import { UilGithub, UilLinkedin, UilEnvelope } from "@iconscout/react-unicons";
// import { UilGithub } from "@iconscout/";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/zodieth"
        className="home__social-icon"
        target="_blank"
      >
        <UilGithub className="uil uil-github" />
      </a>

      <a
        href="https://www.linkedin.com/in/mateo-iglesias-b49041239/"
        className="home__social-icon"
        target="_blank"
      >
        {/* <i className="uil uil-linkedin"></i> */}
        <UilLinkedin className="uil uil-linkedin" />
      </a>

      <a
        href="mailto:mateoiglesias0@gmail.com"
        className="home__social-icon"
        target="_blank"
      >
        {/* <i className="uil uil-envelope"></i> */}
        <UilEnvelope className="uil uil-envelope" />
      </a>
    </div>
  );
};

export default Social;
