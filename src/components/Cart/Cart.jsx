import React, { useContext, useEffect } from "react";
import { List } from "antd";
import { cartContext } from "../../contexts/cartContext";
import CartItem from "./CartItem";

import { Link } from "react-router-dom";

const Cart = () => {
  const { getCart, cart } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return (
    <>
      <div className="container">
        <List
          itemLayout="vertical"
          size="large"
          dataSource={cart?.products}
          footer={
            <div
              style={{
                width: "60vw",
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <h2 style={{ textDecoration: "underline grey" }}>
                Total: {cart?.totalPrice}$
              </h2>
              <Link to="/order">
                <button style={{ width: "9vw" }} className="auth-btn">
                  {" "}
                  Order
                </button>
              </Link>
            </div>
          }
          renderItem={(item) => <CartItem item={item} />}
        />
      </div>
    </>
  );
};

export default Cart;
