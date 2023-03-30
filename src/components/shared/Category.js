import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContextProvider";
import Product from "./Product";
import Styles from "./Category.module.css";

const Category = () => {
  const params = useParams();
  console.log(params);
  const category = params.category;
  const data = useContext(ProductsContext);
  const products = data.filter((item) => item.category === category);
  console.log(category);
  return (
    <div className={Styles.container}>
      {products.map((item) => (
        <Product key={item.id} productData={item} />
      ))}
    </div>
  );
};

export default Category;
