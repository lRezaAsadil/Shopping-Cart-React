import React, { useContext } from "react";

// Context
import { ProductsContext } from "../contexts/ProductsContextProvider";

// Components
import Product from "./shared/Product";

const Store = () => {
  const products = useContext(ProductsContext);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "baseline",
      }}>
      {products.map((item) => (
        <Product key={item.id} productData={item} />
      ))}
    </div>
  );
};

export default Store;
