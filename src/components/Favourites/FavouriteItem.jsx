import React, { useContext } from "react";
import { List, Button } from "antd";
import { favouritesContext } from "../../contexts/favouritesContext";

const FavouriteItem = ({ item }) => {
  //   console.log(item);
  const { deleteFromFavs } = useContext(favouritesContext);
  return (
    <List.Item
      style={{
        width: "60vw",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10vh",
        borderBottom: "1px solid grey",
      }}
      key={item.id}
      extra={<img width={272} alt="img" src={item.item.photo} />}
    >
      <List.Item.Meta
        title={
          <div
            style={{
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
              <Button onClick={() => deleteFromFavs(item.item.id)}>
                Remove
              </Button>
            </div>
          </>
        }
      />
    </List.Item>
  );
};

export default FavouriteItem;
