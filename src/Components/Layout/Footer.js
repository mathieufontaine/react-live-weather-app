import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <p>
          Developped By{" "}
          <a
            href="https://www.linkedin.com/in/mathieu-fontaine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mathieu Fontaine{" "}
          </a>
        </p>
        <div className="logos">
          <a
            href="https://www.linkedin.com/in/mathieu-fontaine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a
            href="https://github.com/mathieufontaine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
        <p>® Copyright 2020</p>
      </div>
    </div>
  );
};

export default Footer;
