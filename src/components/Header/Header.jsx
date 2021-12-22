import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoPersonOutline, IoCartOutline } from "react-icons/io5";
import "./Header.css";
import { useAuth } from "../../contexts/authContext";

const Header = () => {
  const location = useLocation();
  const { handleLogout, user } = useAuth();
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

        {!user ? (
          <Link
            to="/auth"
            style={
              location.pathname === "/"
                ? { color: "white", textDecoration: "none" }
                : { color: "black", textDecoration: "none" }
            }
          >
            <div className="header-login">
              <IoPersonOutline />
              Login
            </div>
          </Link>
        ) : user.email === "aziret1@gmail.com" ? (
          <Link
            to="/admin"
            style={
              location.pathname === "/"
                ? { color: "white", textDecoration: "none" }
                : { color: "black", textDecoration: "none" }
            }
          >
            <div className="header-login">
              <IoPersonOutline />
              Admin
            </div>
          </Link>
        ) : (
          <Link
            to="/auth"
            style={
              location.pathname === "/"
                ? { color: "white", textDecoration: "none" }
                : { color: "black", textDecoration: "none" }
            }
          >
            <div className="header-login">
              <IoPersonOutline />
              Account
            </div>
          </Link>
        )}
      </div>
      <div className="home-logo">
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
      </div>
      {/*  */}
      <div className="right-navbar">
        <div></div>
        <Link
          to="/store"
          style={
            location.pathname === "/"
              ? { color: "white", textDecoration: "none" }
              : { color: "black", textDecoration: "none" }
          }
        >
          <div>Met store</div>
        </Link>
        <div>
          Cart
          <IoCartOutline size="25px" />
        </div>
      </div>
    </div>
  );
};

export default Header;
