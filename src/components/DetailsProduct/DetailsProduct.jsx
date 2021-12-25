import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { cartContext } from "../../contexts/cartContext";
import { productsContext } from "../../contexts/productsContext";
import { favouritesContext } from "../../contexts/favouritesContext";

import { HeartOutlined } from "@ant-design/icons";
import Comments from "../Comments/Comments";

const DetailsProduct = () => {
  const { id } = useParams();

  const { getOneProduct, oneProduct } = useContext(productsContext);

  const { addProductToCart, checkItemInCart } = useContext(cartContext);

  const { addProductToFavs, checkItemInFavs } = useContext(favouritesContext);

  // const [product, setProduct] = useState(null);

  const [checkInCart, setCheckInCart] = useState(checkItemInCart(id));

  const [checkInFavs, setCheckInFavs] = useState(checkItemInFavs(id));

  useEffect(() => {
    getOneProduct(id);
  }, []);

  // useEffect(() => {
  //   setProduct(oneProduct);
  // }, [oneProduct]);

  useEffect(() => {
    setCheckInCart(checkItemInCart(id));
    setCheckInFavs(checkItemInFavs(id));
  });

  // console.log(checkInFavs, "favs

  return (
    <div className="container">
      {oneProduct ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 0",
            }}
          >
            <div>
              <img
                style={{
                  marginBottom: "10px",
                  width: "90%",
                  border: "1px solid #e2e2e2",
                }}
                // width="100vw"
                src={oneProduct.photo}
                alt=""
              />
            </div>
            <div style={{ width: "40vw" }}>
              <h1>{oneProduct.title}</h1>
              <h2>
                <span style={{ color: "grey" }}>Price: </span>
                {"$" + oneProduct.price}
              </h2>

              {oneProduct.album === "kill" ? (
                <h2>
                  <span style={{ color: "grey" }}>Album: </span>Kill 'Em All
                </h2>
              ) : oneProduct.album === "ride" ? (
                <h2>
                  <span style={{ color: "grey" }}>Album: </span>Ride the
                  Lightning
                </h2>
              ) : oneProduct.album === "master" ? (
                <h2>
                  <span style={{ color: "grey" }}>Album: </span>Master of
                  Puppets
                </h2>
              ) : oneProduct.album === "justice" ? (
                <h2>
                  <span style={{ color: "grey" }}>Album: </span>...And Justice
                  for All
                </h2>
              ) : oneProduct.album === "black" ? (
                <h2>
                  <span style={{ color: "grey" }}>Album: </span>The Black Album
                </h2>
              ) : (
                ""
              )}
              <div style={{ marginTop: "30px" }}>{oneProduct.description}</div>
              <button
                className="auth-btn"
                style={{ width: "100%", margin: "5vh 0" }}
                onClick={() => {
                  addProductToCart(oneProduct);
                  setCheckInCart(checkItemInCart(id));
                }}
              >
                ADD TO CART
              </button>
              <div>
                <HeartOutlined
                  style={{
                    fontSize: "25px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    addProductToFavs(oneProduct);
                    setCheckInCart(checkItemInFavs(id));
                  }}
                />
                Add to favourites
              </div>
            </div>
          </div>
          <Comments oneProduct={oneProduct} />
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailsProduct;
