import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import "./Header.css";
import { useAuth } from "../../contexts/authContext";
import { Badge } from "antd";
import { cartContext } from "../../contexts/cartContext";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { favouritesContext } from "../../contexts/favouritesContext";

const Header = () => {
  const location = useLocation();
  const { user } = useAuth();
  const { getCart, cartLength } = useContext(cartContext);
  const { getFavs, favsLength } = useContext(favouritesContext);
  useEffect(() => {
    getCart();
    getFavs();
  }, []);
  return (
    <div className={location.pathname === "/" ? "header" : "header_active"}>
      <div className="left-navbar">
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" for="menu__toggle">
            <span></span>
          </label>
          <ul className="menu__box">
            {!user ? (
              <Link
                to="/auth"
                style={{ color: "black", textDecoration: "none" }}
              >
                <div>
                  <IoPersonOutline />
                  Login
                </div>
              </Link>
            ) : user.email === "aziret1@gmail.com" ? (
              <Link
                to="/admin"
                style={{ color: "black", textDecoration: "none" }}
              >
                <div>
                  <IoPersonOutline />
                  Admin
                </div>
              </Link>
            ) : (
              <Link
                to="/auth"
                style={{ color: "black", textDecoration: "none" }}
              >
                <h2>
                  <IoPersonOutline />
                  Account
                </h2>
              </Link>
            )}
            <Link
              to="/store"
              style={{ color: "black", textDecoration: "none" }}
            >
              <h2>Met store</h2>
            </Link>
            <Link
              to="/favourites"
              style={{ color: "black", textDecoration: "none" }}
            >
              <h2>Favourites</h2>
            </Link>
            <Link to="/cart" style={{ color: "black", textDecoration: "none" }}>
              <h2>Cart</h2>
            </Link>
          </ul>
        </div>
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
              <span>Login</span>
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
            <div className="header-login links">
              <IoPersonOutline />
              <span>Admin</span>
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
              <span className="links">Account</span>
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
              className="logo-altern"
              style={{ width: "25vw", height: "auto", border: "0" }}
              src="https://www.metallica.com/on/demandware.static/Sites-Metallica-Site/-/default/dwf7a2891a/images/header/logo.svg"
              alt=""
            />
          </Link>
        )}
      </div>
      {/*  */}
      <div className="right-navbar">
        <Link to="/favs" className="nav-link">
          <Badge size="small" color="red" count={+favsLength}>
            <HeartOutlined
              style={
                location.pathname === "/"
                  ? { color: "white", fontSize: "20px" }
                  : { color: "black", fontSize: "20px" }
              }
            />
          </Badge>
        </Link>
        <Link
          className="links"
          to="/store"
          style={
            location.pathname === "/"
              ? { color: "white", textDecoration: "none" }
              : { color: "black", textDecoration: "none" }
          }
        >
          <div>Met store</div>
        </Link>
        <Link
          to="/cart"
          className="nav-link"
          style={
            location.pathname === "/"
              ? { color: "white", textDecoration: "none" }
              : { color: "black", textDecoration: "none" }
          }
        >
          <span className="links">Cart</span>
          <Badge size="small" color="red" count={+cartLength}>
            <ShoppingCartOutlined
              style={
                location.pathname === "/"
                  ? { color: "white", fontSize: "20px" }
                  : { color: "black", fontSize: "20px" }
              }
            />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default Header;
