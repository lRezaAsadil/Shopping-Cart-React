import { Rating } from "@mui/material";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContextProvider";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id - 1;
  const data = useContext(ProductsContext);
  const product = data[id];
  console.log(product);
  const { title, price, category, image, rating } = product;
  const { rate } = rating;
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p></p>
        <p>Category : {category}</p>
        <Rating
          name="half-rating"
          defaultValue={rate}
          precision={0.5}
          readOnly
        />

        <div>
          <span> {price} $ </span>
          <Link to="/products">Back to Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
