import React, { useContext, useEffect, useState } from "react";
import { List, Avatar, Pagination, Col } from "antd";
import { Link, useSearchParams } from "react-router-dom";

import { productsContext } from "../../contexts/productsContext";

const AdminProductsList = () => {
  const { getProducts, deleteProduct, products } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        justifyContent: "space-evenly",
        margin: "15px",
      }}
    >
      <Col
        style={{
          width: "50vw",
          padding: "15px",
        }}
      >
        <List
          className="demo-loadmore-list items-list"
          itemLayout="horizontal"
          dataSource={products}
          renderItem={(item) => (
            <List.Item
              actions={[
                <a
                  key="list-loadmore-edit"
                  onClick={() => deleteProduct(item.id)}
                  style={{ color: "#b52532" }}
                >
                  Delete
                </a>,
                <span>|</span>,
                <Link style={{ color: "#b52532" }} to={`/edit/${item.id}`}>
                  Edit
                </Link>,
                <span>|</span>,
                <Link style={{ color: "#b52532" }} to={`/products/${item.id}`}>
                  More
                </Link>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.photo} size={65} />}
                title={
                  <a>
                    {item.title}, {item.gender}, {"$" + item.price}
                  </a>
                }
              />
            </List.Item>
          )}
        />
      </Col>
    </div>
  );
};

export default AdminProductsList;
