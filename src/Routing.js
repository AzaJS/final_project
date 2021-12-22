import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";
// import Login from "./components/Auth/Login";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import { useAuth } from "./contexts/authContext";
import AdminPage from "./pages/AdminPage";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 2,
    },
    {
      link: "/store",
      element: <Store />,
      id: 3,
    },
  ];

  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
  ];

  const { user } = useAuth();
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
      {user
        ? ADMIN_ROUTES.map((item) => (
            <Route
              key={item.id}
              path={item.link}
              element={
                user.email === "aziret1@gmail.com" ? (
                  item.element
                ) : (
                  <Navigate replace to="*" />
                )
              }
            />
          ))
        : null}
    </Routes>
  );
};

export default Routing;
