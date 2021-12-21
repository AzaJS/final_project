import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/auth",
      element: <Login />,
      id: 2,
    },
    {
      link: "/store",
      element: <Store />,
      id: 3,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
    </Routes>
  );
};

export default Routing;
