import React from "react";
import { useAuth } from "../../contexts/authContext";
import Account from "./Account";
import Login from "./Login";

const Auth = () => {
  const { user } = useAuth();
  return <div className="container">{user ? <Account /> : <Login />}</div>;
};

export default Auth;
