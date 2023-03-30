import React, { useContext } from "react";
import Styles from "./Store.module.css";

// Context
import { ProductsContext } from "../contexts/ProductsContextProvider";

// Components
import Product from "./shared/Product";

const Store = () => {
  const products = useContext(ProductsContext);
  return (
    <div className={Styles.container}>
      {products.map((item) => (
        <Product key={item.id} productData={item} />
      ))}
    </div>
  );
};

export default Store;
