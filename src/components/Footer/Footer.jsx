import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundImage: "url(/met-black.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
      }}
    >
      <div className="footer-links">
        <div className="menu-footer">
          <ul>
            <li>Help</li>
            <li>Returns</li>
            <li>Credits</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="logo-footer">
          <img
            style={{ width: "40vw", height: "35vh", border: "0" }}
            src="https://www.metallica.com/on/demandware.static/Sites-Metallica-Site/-/default/dw88afda83/images/header/logo-homepage.svg"
            alt=""
          />
        </div>
        <div></div>
        <div></div>
        <div className="copyright">
          <span>© Metallica</span>
          <span>© Blackened Recordings</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
