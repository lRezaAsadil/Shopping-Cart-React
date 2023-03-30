import React from "react";
import { Rating } from "@mui/material";

const Product = ({ productData }) => {
  const { title, price, category, image, rating } = productData;
  const { rate } = rating;
  return (
    <div>
      <img src={image} alt={title} style={{ width: "250px" }} />
      <h3>{title}</h3>
      <p>{price}</p>
      <p>Category : {category} </p>
      <Rating name="half-rating" defaultValue={rate} precision={0.5} readOnly />
      <div>
        <a href="#/">Details</a>
        <div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
