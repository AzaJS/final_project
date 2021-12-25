import React, { useReducer } from "react";
import { CASE_GET_FAVS } from "../helpers/cases";

export const favouritesContext = React.createContext();

const INIT_STATE = {
  favs: {},
  favsLength: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_FAVS:
      return {
        ...state,
        favs: action.payload,
        favsLength: action.payload.products.length,
      };
    default:
      return state;
  }
};

const FavouritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function addProductToFavs(product) {
    let favs = JSON.parse(localStorage.getItem("favs"));
    if (!favs) {
      favs = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    let filteredCart = favs.products.filter(
      (item) => item.item.id === product.id
    );
    if (filteredCart.length > 0) {
      favs.products = favs.products.filter(
        (item) => item.item.id !== product.id
      );
    } else {
      favs.products.push(newProduct);
    }
    // cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("favs", JSON.stringify(favs));
    getFavs();
  }

  function getFavs() {
    let favs = JSON.parse(localStorage.getItem("favs"));
    if (!favs) {
      favs = {
        products: [],
        totalPrice: 0,
      };
    }
    // cart.totalPrice = calcTotalPrice(cart.products);
    dispatch({
      type: CASE_GET_FAVS,
      payload: favs,
    });
  }

  function deleteFromFavs(id) {
    let favs = JSON.parse(localStorage.getItem("favs"));
    if (!favs) {
      favs = {
        products: [],
        totalPrice: 0,
      };
    }
    favs.products = favs.products.filter((item) => item.item.id !== id);
    localStorage.setItem("favs", JSON.stringify(favs));
    getFavs();
  }

  function checkItemInFavs(id) {
    let favs = JSON.parse(localStorage.getItem("favs"));
    if (!favs) {
      favs = {
        products: [],
        totalPrice: 0,
      };
    }
    let filteredCart = favs.products.filter((item) => item.item.id === id);
    return filteredCart.length > 0 ? true : false;
  }

  //   function changeProductCount(count, id) {
  //     if (count <= 0) {
  //       count = 1;
  //     }
  //     let cart = JSON.parse(localStorage.getItem("favs"));
  //     cart.products = cart.products.map((item) => {
  //       if (item.item.id === id) {
  //         item.count = count;
  //         // item.subPrice = calcSubPrice(item);
  //       }
  //       return item;
  //     });
  //     // cart.totalPrice = calcTotalPrice(cart.products);
  //     localStorage.setItem("favs", JSON.stringify(cart));
  //     getCart();
  //   }
  return (
    <favouritesContext.Provider
      value={{
        favs: state.favs,
        favsLength: state.favsLength,
        addProductToFavs,
        getFavs,
        deleteFromFavs,
        checkItemInFavs,
      }}
    >
      {children}
    </favouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
