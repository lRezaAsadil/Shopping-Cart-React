import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { shorten } from "../../helper/functions";

const Product = ({ productData }) => {
  const { id, title, price, category, image, rating } = productData;
  const { rate } = rating;
  return (
    <div>
      <img src={image} alt={title} style={{ width: "250px" }} />
      <h3>{shorten(title)}</h3>
      <p>{price} $</p>
      <p>Category : {category} </p>
      <Rating name="half-rating" defaultValue={rate} precision={0.5} readOnly />
      <div>
        <Link to={`/products/${id}`}>Details</Link>
        <div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
