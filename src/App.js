import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routing from "./Routing";
import AuthContextProvider from "./contexts/authContext";
// import "antd/dist/antd.css";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Header />
        <Routing />
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
