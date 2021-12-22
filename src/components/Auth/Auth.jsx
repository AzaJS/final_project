import React from "react";
import { useAuth } from "../../contexts/authContext";
import Account from "./Account";
// import Home from "../Home/Home";
import Login from "./Login";

const Auth = () => {
  const { user } = useAuth();
  return <div>{user ? <Account /> : <Login />}</div>;
};

export default Auth;
