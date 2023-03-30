import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContextProvider";
import Product from "./Product";

const Category = () => {
  const params = useParams();
  console.log(params);
  const category = params.category;
  const data = useContext(ProductsContext);
  const products = data.filter((item) => item.category === category);
  console.log(category);
  return (
    <div>
      {products.map((item) => (
        <Product key={item.id} productData={item} />
      ))}
    </div>
  );
};

export default Category;
