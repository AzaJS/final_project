import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
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
        <div>
          <FiMenu />
          Menu
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
        <Link to="/favs">
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
          to="/store"
          style={
            location.pathname === "/"
              ? { color: "white", textDecoration: "none" }
              : { color: "black", textDecoration: "none" }
          }
        >
          <div>Met store</div>
        </Link>

        {/* <div> */}
        {/* Cart
          <IoCartOutline size="25px" /> */}
        <Link
          to="/cart"
          style={
            location.pathname === "/"
              ? { color: "white", textDecoration: "none" }
              : { color: "black", textDecoration: "none" }
          }
        >
          Cart
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
        {/* </div> */}
      </div>
    </div>
  );
};

export default Header;
