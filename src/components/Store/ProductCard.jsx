import React, { useContext, useEffect, useState } from "react";

import { Card } from "antd";

import {
  ShoppingCartOutlined,
  LikeFilled,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";

const ProductCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));
  useEffect(() => {
    setCheckInCart(checkItemInCart(item.id));
  });
  console.log(checkInCart, "check");
  return (
    <Card
      hoverable
      style={{ width: 240, margin: "0 15px" }}
      cover={<img alt="example" src={item.photo} />}
      actions={[
        <ShoppingCartOutlined
          style={{ color: checkInCart ? "red" : "black", fontSize: "25px" }}
          onClick={() => {
            addProductToCart(item);
            setCheckInCart(checkItemInCart(item.id));
          }}
        />,
        <LikeFilled />,
        <Link to={`/products/${item.id}`}>
          <EllipsisOutlined key="ellipsis" />
        </Link>,
      ]}
    >
      <Card.Meta title={item.title} description={"$" + item.price} />
    </Card>
  );
};

export default ProductCard;
