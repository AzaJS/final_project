import React, { useContext } from "react";
import { List, InputNumber, Button } from "antd";
import { cartContext } from "../../contexts/cartContext";

const CartItem = ({ item }) => {
  //   console.log(item);
  const { deleteFromCart, changeProductCount } = useContext(cartContext);
  return (
    <List.Item
      style={{
        width: "60vw",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10vh",
        // borderTop: "1px solid grey",
        borderBottom: "1px solid grey",
      }}
      key={item.id}
      extra={<img width={272} alt="img" src={item.item.photo} />}
    >
      <List.Item.Meta
        title={
          <div
            style={{
              //   display: "flex",
              //   justifyContent: "space-between",
              //   alignItems: "center",
              width: "70%",
            }}
          >
            <h2>{item.item.title}</h2>
            <h3>{"$" + item.item.price}</h3>
          </div>
        }
        description={
          <>
            <div>{item.item.description}</div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "70%",
                marginTop: "50px",
              }}
            >
              <div>
                <h4>Quantity</h4>
                <Button
                  onClick={() =>
                    changeProductCount(item.count - 1, item.item.id)
                  }
                >
                  -
                </Button>
                <InputNumber value={item.count} disabled />
                <Button
                  onClick={() =>
                    changeProductCount(item.count + 1, item.item.id)
                  }
                >
                  +
                </Button>
              </div>
              <div>
                <h4>SubPrice</h4>
                <h3>{"$" + item.subPrice}</h3>
              </div>
            </div>
            <Button onClick={() => deleteFromCart(item.item.id)}>Remove</Button>
          </>
        }
      />
    </List.Item>
  );
};

export default CartItem;
