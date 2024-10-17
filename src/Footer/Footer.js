import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
    <span className="name">
      Inshorts clone made by -{" "}
      <a href="https://www.instagram.com/patilvijaya19?igsh=MXJrazM3YWFpZHYyYw==" target="__blank">
        Vijaya Patil
      </a>
    </span>
    <hr style={{ width: "90%" }} />
    <div className="iconContainer">
      <a href="https://www.instagram.com/patilvijaya19?igsh=MXJrazM3YWFpZHYyYw==" target="__blank">
        <i className="fab fa-instagram-square fa-2x"></i>
      </a>
      <a href="www.linkedin.com/in/
        vijaya-patil-2861b81a4" target="__blank">
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="https://piyushjsx.netlify.app/" target="__blank">
        <i className="fas fa-link fa-2x"></i>
      </a>
    </div>
  </div>
  );
}

export default Footer;