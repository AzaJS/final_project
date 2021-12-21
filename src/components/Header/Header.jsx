import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoPersonOutline, IoCartOutline } from "react-icons/io5";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  return (
    <div className={location.pathname === "/" ? "header" : "header_active"}>
      <div className="left-navbar">
        <div>
          <FiMenu />
          Menu
        </div>
        {/* <div>
          <FaSearch />
          Search
        </div> */}
        <Link
          to="/auth"
          style={
            location.pathname === "/"
              ? { color: "white", textDecoration: "none" }
              : { color: "black", textDecoration: "none" }
          }
        >
          <div className="login">
            {/* <span> */}
            <IoPersonOutline />
            {/* </span> */}
            Login
            {/* <span>Login</span> */}
          </div>
        </Link>
      </div>

      <span className="home-logo">
        {location.pathname === "/" ? (
          <Link to="/">
            <img
              style={{ width: "40vw", marginTop: "1vh", border: "0" }}
              src="https://www.metallica.com/on/demandware.static/Sites-Metallica-Site/-/default/dw88afda83/images/header/logo-homepage.svg"
              alt=""
            />
          </Link>
        ) : (
          <Link to="/">
            <img
              style={{ width: "25vw", height: "auto", border: "0" }}
              src="https://www.metallica.com/on/demandware.static/Sites-Metallica-Site/-/default/dwf7a2891a/images/header/logo.svg"
              alt=""
            />
          </Link>
        )}
      </span>
      {/*  */}
      <div className="right-navbar">
        <div></div>
        <div>Met store</div>
        <div>
          Cart
          <IoCartOutline size="25px" />
        </div>
      </div>
    </div>
  );
};

export default Header;
