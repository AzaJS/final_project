import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routing from "./Routing";
import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";
import "antd/dist/antd.css";
import FavouritesContextProvider from "./contexts/favouritesContext";

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <FavouritesContextProvider>
          <ProductsContextProvider>
            <BrowserRouter>
              <Header />
              <Routing />
              <Footer />
            </BrowserRouter>
          </ProductsContextProvider>
        </FavouritesContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;
