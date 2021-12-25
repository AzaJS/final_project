import React, { useContext, useEffect } from "react";
import { List } from "antd";
import { favouritesContext } from "../../contexts/favouritesContext";

import FavouriteItem from "./FavouriteItem";

const Favourites = () => {
  const { getFavs, favs } = useContext(favouritesContext);
  useEffect(() => {
    getFavs();
  }, []);
  console.log(favs);
  return (
    <>
      <div className="container">
        <List
          itemLayout="vertical"
          size="large"
          dataSource={favs?.products}
          footer={null}
          renderItem={(item) => <FavouriteItem item={item} />}
        />
      </div>
    </>
  );
};

export default Favourites;
