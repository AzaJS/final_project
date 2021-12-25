import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Input, Pagination, Empty, Slider, Select } from "antd";

import ProductCard from "./ProductCard";
import { productsContext } from "../../contexts/productsContext";
import "./Store.css";

const Store = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 4
  );
  const [price, setPrice] = useState([1, 10000]);
  const [album, setAlbum] = useState([]);
  const { getProducts, products, productsTotalCount } =
    useContext(productsContext);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
      album: album,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, []);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
      album: album,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, page, limit, album, price]);
  console.log(products);
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div
        className="products-search"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          {" "}
          <Input.Search
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "25vw" }}
            placeholder="Search..."
          />
        </div>
        <div style={{ width: "30%" }}>
          <Select
            allowClear
            style={{ width: "100%" }}
            value={album}
            onChange={(e) => setAlbum(e)}
            mode="multiple"
            placeholder="Filter by album"
          >
            <Select.Option key="kill" value="kill">
              Kill 'Em All
            </Select.Option>
            <Select.Option key="ride" value="ride">
              Ride The Lightning
            </Select.Option>
            <Select.Option key="master" value="master">
              Master of Puppets
            </Select.Option>
            <Select.Option key="justice" value="justice">
              ...And Justice for All
            </Select.Option>
            <Select.Option key="black" value="black">
              The Black Album
            </Select.Option>
          </Select>
        </div>
        <div style={{ width: "30vw" }}>
          <Slider
            value={price}
            onChange={(e) => setPrice(e)}
            range
            defaultValue={[1, 10000]}
            min={1}
            max={10000}
            step={10}
          />
        </div>
      </div>
      <div className="prod-list">
        {products.length > 0 ? (
          products.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <Empty style={{ marginBottom: "20px" }} />
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          total={+productsTotalCount}
        />
      </div>
    </div>
  );
};

export default Store;
