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
      <div
        className="upcoming container"
        style={{
          backgroundImage: "url(/home-upcoming.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        {/* <h1>TOUR DATES</h1> */}
        <div className="tour-dates" style={{ height: "100%" }}>
          <div className="dates-place">
            <h2 className="date">FEB 25</h2>
            <div className="place">
              <h2>Las Vegas, NV, United States</h2>
              <h3>Allegiant Stadium</h3>
            </div>
          </div>
          <div className="dates-place">
            <h2 className="date">APR 27</h2>
            <div className="place">
              <h2>Santiago, Chile</h2>
              <h3>Estadio Nacional</h3>
            </div>
          </div>
          <div className="dates-place">
            <h2 className="date">APR 30</h2>
            <div className="place">
              <h2>Buenos Aires, Argentina</h2>
              <h3>Campo Argentino de Polo</h3>
            </div>
          </div>
          <div className="dates-place">
            <h2 className="date">MAY 05</h2>
            <div className="place">
              <h2>Porto Alegre, Brazil</h2>
              <h3>Estacionamento da Fiergs</h3>
            </div>
          </div>
          <div className="dates-place">
            <h2 className="date">MAY 07</h2>
            <div className="place">
              <h2>Curitiba, Brazil</h2>
              <h3>Estádio Couto Pereira</h3>
            </div>
          </div>
          <div className="dates-place">
            <h2 className="date">MAY 10</h2>
            <div className="place">
              <h2>São Paulo, Brazil</h2>
              <h3>Estádio do Morumbi</h3>
            </div>
          </div>
          <div className="dates-place">
            <h2 className="date">FEB 25</h2>
            <div className="place">
              <h2>Belo Horizonte, Brazil</h2>
              <h3>Estádio do Mineirão</h3>
            </div>
          </div>
        </div>
        <div>
          <div className="btns">
            <button>BUY TICKETS</button>
            <button>BUY ENHANCED EXPERIENCE</button>
          </div>
          <div className="btns">
            <button>BUY TICKETS</button>
            <button>BUY ENHANCED EXPERIENCE</button>
          </div>
          <div className="btns">
            <button>BUY TICKETS</button>
            <button>BUY ENHANCED EXPERIENCE</button>
          </div>
          <div className="btns">
            <button>BUY TICKETS</button>
            <button>BUY ENHANCED EXPERIENCE</button>
          </div>
          <div className="btns">
            <button>BUY TICKETS</button>
            <button>BUY ENHANCED EXPERIENCE</button>
          </div>
          <div className="btns">
            <button>BUY TICKETS</button>
            <button>BUY ENHANCED EXPERIENCE</button>
          </div>
          <div className="btns">
            <button>BUY TICKETS</button>
            <button>BUY ENHANCED EXPERIENCE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
