import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Cart from "./components/Cart/Cart";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import { useAuth } from "./contexts/authContext";
import AdminPage from "./pages/AdminPage";
import CreditApp from "./components/CreditCard/CreditApp";
import EditProduct from "./components/EditProduct/EditProduct";
import OrderForm from "./components/OrderForm/OrderForm";
import Favourites from "./components/Favourites/Favourites";
import ForgorPassword from "./components/Auth/ForgorPassword";
import Chat from "./components/Chat/Chat";

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
    {
      link: "/products/:id",
      element: <DetailsProduct />,
      id: 4,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 5,
    },
    {
      link: "/order",
      element: <OrderForm />,
      id: 6,
    },
    {
      link: "/credit",
      element: <CreditApp />,
      id: 7,
    },
    {
      link: "/favs",
      element: <Favourites />,
      id: 8,
    },
    {
      link: "/chat",
      element: <Chat />,
      id: 9,
    },
    {
      link: "/reset",
      element: <ForgorPassword />,
      id: 10,
    },
  ];

  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 2,
    },
  ];

  const { user } = useAuth();
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route key={item.id} path={item.link} element={item.element} />
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
