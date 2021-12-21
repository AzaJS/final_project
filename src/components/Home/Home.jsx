import React from "react";
import "./Home.css";
import {
  FaApple,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaSpotify,
  FaFacebookF,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <div
        className="home-hero"
        style={{
          backgroundImage: "url(/home-hero-aftershock.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          marginTop: "-180px",
        }}
      >
        <div className="social-links">
          <ul className="links-list">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaApple />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaSpotify />
            </li>
          </ul>
        </div>
      </div>
      <div>asd</div>
    </div>
  );
};

export default Home;
